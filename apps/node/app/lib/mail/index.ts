import nodemailer from 'nodemailer';
import mjml from 'mjml';
import { useEnvironment } from '../environment';
import { useLogger } from '../logger';
import { User } from '@/db/auth-schema';

import resetPasswordTemplate from './reset_password_template.mjml?raw';
import verifyAccountTemplate from './verify_account_template.mjml?raw';

const { logger } = useLogger();
const { serverEnv } = useEnvironment();

export function useAuthEmail() {
  const logoUrl = `${serverEnv!.BETTER_AUTH_URL}/donut.svg`;
  const client = nodemailer.createTransport({
    service: serverEnv!.STMP_SERVICE,
    host: serverEnv!.SMTP_HOST,
    port: serverEnv!.SMTP_PORT,
    secureConnection: false,
    requiresAuth: true,
    auth: {
      user: serverEnv!.SMTP_USER,
      pass: serverEnv!.SMTP_PASSWORD
    }
  });

  return {
    sendVerificationEmail: async (user: User, url: string) => {
      logger.info(`Sending verification email to ${user.email}`);
      try {
        await client.sendMail({
          from: `Tanstack starter <${serverEnv!.SMTP_USER}>`,
          to: user.email,
          subject: 'Please verify your email',
          html: mjml(verifyAccountTemplate)
            .html.replace('{{logo_url}}', logoUrl)
            .replace('{{user_name}}', user.firstName)
            .replace('{{verification_link}}', url)
        });
        logger.debug(`Verification email sent to ${user.email}`);
      } catch (e) {
        logger.warn(`Failed to send verification email to ${user.email}`, e);
      }
    },
    sendResetPassword: async (user: User, url: string) => {
      logger.info(`Sending reset password email to ${user.email}`);
      client.sendMail({
        from: `Tanstack starter <${serverEnv!.SMTP_USER}>`,
        to: user.email,
        subject: 'Reset your password',
        html: mjml(resetPasswordTemplate)
          .html.replace('{{logo_url}}', logoUrl)
          .replace('{{user_name}}', user.firstName)
          .replace('{{reset_link}}', url)
      });
    }
  };
}
