import { createRecipe } from '@/api/recipes';
import { FieldError } from '@/components/form/field-error';
import { FieldSet } from '@/components/form/field-set';
import { Form } from '@/components/form/form';
import { LoadingButton } from '@/components/loading-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { recipeSchema } from '@/lib/validators/recipe';
import { useForm } from '@tanstack/react-form';
import { createFileRoute } from '@tanstack/react-router';
import { toast } from 'sonner';

export const Route = createFileRoute('/_navbar/_authed/recipe/_sidebar/new')({
  component: RouteComponent
});

function RouteComponent() {
  const navigate = Route.useNavigate();
  const form = useForm({
    defaultValues: {
      title: '',
      content: ''
    },
    validators: {
      onChange: recipeSchema
    },
    onSubmit: async ({ value }) => {
      const recipe = await createRecipe({ data: value });
      if (recipe) {
        console.log('Recipe created', recipe);
        navigate({
          to: '/recipe/$recipeId',
          params: { recipeId: recipe.id }
        });
      } else {
        toast.error('Failed to create recipe');
      }
    }
  });

  return (
    <div className="flex flex-col items-center">
      <Form
        className="mx-12 w-full sm:mx-0 sm:w-1/3 lg:w-1/5"
        onSubmit={form.handleSubmit}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create a new recipe</h1>
        </div>
        <FieldSet label="Title">
          <form.Field name="title">
            {(field) => (
              <>
                <Input
                  type="text"
                  id={field.name}
                  placeholder="Spaghetti alla carbonara"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                />
                <FieldError
                  isDirty={field.state.meta.isDirty}
                  isBlurred={field.state.meta.isBlurred}
                  error={field.state.meta.errors
                    .map((e) => e?.message)
                    .find((e) => !!e)}
                />
              </>
            )}
          </form.Field>
        </FieldSet>
        <FieldSet label="Procedure">
          <form.Field name="content">
            {(field) => (
              <>
                <Textarea
                  id={field.name}
                  placeholder="Please don't put the cream on it."
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                />
                <FieldError
                  isDirty={field.state.meta.isDirty}
                  isBlurred={field.state.meta.isBlurred}
                  error={field.state.meta.errors
                    .map((e) => e?.message)
                    .find((e) => !!e)}
                />
              </>
            )}
          </form.Field>
        </FieldSet>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <LoadingButton
              type="submit"
              className="w-full"
              loading={isSubmitting}
              disabled={!canSubmit}
            >
              Create
            </LoadingButton>
          )}
        </form.Subscribe>
      </Form>
    </div>
  );
}
