import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NotificationsTab = () => {
  const { toast } = useToast();
  const notifs = [
    { id: "road", label: "Road Condition Updates", desc: "Get notified about new posts or replies in the road conditions forum", default: true },
    { id: "blog", label: "New Blog Posts", desc: "Get notified when we publish new travel guides and articles", default: true },
    { id: "app", label: "App Updates", desc: "Keep your maps and database up to date with the latest content", default: true },
    { id: "locations", label: "New Locations Added", desc: "Real-time database, activity and accommodation map updates", default: false },
  ];

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">In-App Notifications</CardTitle>
        <CardDescription>Control what notifications you see while using the app</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-1">
          {notifs.map(n => (
            <div key={n.id} className="flex items-center justify-between py-4 border-b border-border last:border-0">
              <div>
                <p className="font-medium text-foreground">{n.label}</p>
                <p className="text-sm text-muted-foreground">{n.desc}</p>
              </div>
              <Switch defaultChecked={n.default} />
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/50 border border-border">
          <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-foreground text-sm">About Notifications</p>
            <p className="text-sm text-muted-foreground">These are in-app notifications only. They appear when you're using the Pocket Guide app and won't send emails to your inbox.</p>
          </div>
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => toast({ title: "Notification settings saved" })}>
          Save Preferences
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotificationsTab;
