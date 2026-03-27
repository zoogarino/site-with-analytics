import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Mail, CheckCircle, Lock, MapPin, Car, Building, Compass } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmailTabProps {
  isSubscribed: boolean;
  onToggleSubscription: () => void;
}

const EmailTab = ({ isSubscribed, onToggleSubscription }: EmailTabProps) => {
  const { toast } = useToast();

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Email Preferences</CardTitle>
        <CardDescription>Control what emails you receive from Pocket Guide Namibia</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Newsletter Section */}
        <div className="space-y-4">
          {isSubscribed ? (
            <>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Subscribed to Pocket Guide Newsletter</p>
                  <p className="text-sm text-muted-foreground mt-1">You'll receive our curated travel guides twice per month</p>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-foreground mb-2">What you'll receive:</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> Destination highlights and itineraries</li>
                      <li className="flex items-center gap-2"><Car className="h-3.5 w-3.5 text-primary" /> Self-drive tips and road advice</li>
                      <li className="flex items-center gap-2"><Building className="h-3.5 w-3.5 text-primary" /> Accommodation and activity recommendations</li>
                      <li className="flex items-center gap-2"><Compass className="h-3.5 w-3.5 text-primary" /> Trip planning resources</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                className="text-destructive hover:text-destructive/80"
                onClick={() => {
                  onToggleSubscription();
                  toast({ title: "Unsubscribed", description: "You've been removed from the newsletter." });
                }}
              >
                <Mail className="h-4 w-4 mr-2" /> Unsubscribe from Newsletter
              </Button>
            </>
          ) : (
            <div className="p-6 rounded-xl border border-border bg-accent/30 text-center">
              <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="font-semibold text-foreground text-lg">Not Subscribed to Newsletter</p>
              <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
                Join thousands of travelers getting curated Namibia travel guides, tips, and inspiration delivered twice per month.
              </p>
              <div className="mt-4 text-left max-w-xs mx-auto">
                <p className="text-sm font-medium text-foreground mb-2">You'll receive:</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> Destination highlights and detailed itineraries</li>
                  <li className="flex items-center gap-2"><Car className="h-3.5 w-3.5 text-primary" /> Expert self-drive tips and road condition updates</li>
                  <li className="flex items-center gap-2"><Building className="h-3.5 w-3.5 text-primary" /> Curated accommodation and activity recommendations</li>
                  <li className="flex items-center gap-2"><Compass className="h-3.5 w-3.5 text-primary" /> Trip planning resources and insider advice</li>
                </ul>
              </div>
              <Button
                className="mt-5 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  onToggleSubscription();
                  toast({ title: "Subscribed!", description: "Welcome to the Pocket Guide Newsletter." });
                }}
              >
                Subscribe to Newsletter
              </Button>
              <p className="text-xs text-muted-foreground mt-3">Delivered twice per month • Unsubscribe anytime</p>
            </div>
          )}
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
