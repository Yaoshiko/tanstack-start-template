import {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { createFileRoute } from '@tanstack/react-router';
import { Sidebar } from 'lucide-react';

export const Route = createFileRoute('/sandbox')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="flex h-full w-full">
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          Content
        </main>
      </SidebarProvider>
    </div>
  );
}

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        Test
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
