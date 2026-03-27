import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, CheckCircle, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmailTab = () => {
  const { toast } = useToast();
  const [subscribed, setSubscribed] = useState(true);

  const topics = [
    { id: "destinations", label: "Destination Guides", desc: "In-depth guides to Namibia's regions and attractions" },
    { id: "selfdrive", label: "Self-Drive Tips", desc: "Practical advice for navigating Namibia's roads" },
    { id: "accommodation", label: "Accommodation Reviews", desc: "Honest reviews of lodges, camps, and hotels" },
    { id: "activities", label: "Activity Recommendations", desc: "Tours, safaris, and unique experiences" },
    { id: "planning", label: "Trip Planning Advice", desc: "Itineraries, budgeting, and planning resources" },
  ];

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Email Preferences</CardTitle>
        <CardDescription>Control what emails you receive from Pocket Guide Namibia</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Subscription Status */}
        <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
          <div className="mt-0.5">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground">✅ Subscribed to Pocket Guide Newsletter</p>
            <p className="text-sm text-muted-foreground">You'll receive our curated travel guides twice per month.</p>
          </div>
        </div>

        {/* Topic Preferences */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground">Customize Your Content</h3>
            <p className="text-sm text-muted-foreground">Tell us what topics interest you</p>
          </div>
          <div className="space-y-3">
            {topics.map(t => (
              <label key={t.id} className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition cursor-pointer">
                <Checkbox defaultChecked className="mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{t.label}</p>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </label>
            ))}
          </div>
          <Button
            variant="ghost"
            className="text-destructive hover:text-destructive/80"
            onClick={() => toast({ title: "Unsubscribed", description: "You've been removed from the newsletter." })}
          >
            <Mail className="h-4 w-4 mr-2" /> Unsubscribe from Newsletter
          </Button>
        </div>

        {/* Marketing Emails */}
        <div className="space-y-4 pt-4 border-t border-border">
          <h3 className="font-semibold text-foreground">Marketing Emails</h3>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-foreground">Exclusive Deals & Offers</p>
              <p className="text-sm text-muted-foreground">Special rates from partner lodges, tour operators, and rental companies</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>

        {/* System Emails */}
        <div className="space-y-3 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold text-muted-foreground">System Emails (Always Active)</h3>
          </div>
          <p className="text-sm text-muted-foreground">These emails are essential and cannot be disabled</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Booking confirmations and updates</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Account security alerts</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Password reset requests</li>
          </ul>
        </div>

        <div className="pt-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => toast({ title: "Preferences saved" })}>
            Save Preferences
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailTab;
