import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Download, Trash2, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PrivacyTab = () => {
  const { toast } = useToast();

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Privacy & Data</CardTitle>
        <CardDescription>Manage your privacy settings and data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Data Sharing */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Data Sharing</h3>
          <div className="flex items-start justify-between gap-4 py-3">
            <div>
              <p className="font-medium text-foreground">Help improve Pocket Guide</p>
              <p className="text-sm text-muted-foreground">Allow us to use anonymized trip data to improve our route recommendations and app features. Your personal information is never shared.</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>

        {/* Your Data */}
        <div className="space-y-4 pt-4 border-t border-border">
          <div>
            <h3 className="font-semibold text-foreground">Your Data</h3>
            <p className="text-sm text-muted-foreground">You have the right to access, download, or delete your personal data at any time</p>
          </div>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => toast({ title: "Preparing download…", description: "You'll receive an email with your data." })}
          >
            <Download className="h-4 w-4" /> Download My Data
          </Button>
        </div>

        {/* Danger Zone */}
        <div className="space-y-4 pt-4 border-t border-destructive/30">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <h3 className="font-semibold text-destructive">Danger Zone</h3>
          </div>
          <div className="p-4 rounded-xl border border-destructive/30 bg-destructive/5">
            <p className="font-medium text-foreground mb-1">Delete My Account</p>
            <p className="text-sm text-muted-foreground mb-4">
              Permanently delete your account and all associated data. This action cannot be undone. All your saved trips, favorites, and settings will be lost forever.
            </p>
            <Button
              variant="destructive"
              className="gap-2"
              onClick={() => toast({ title: "Account deletion", description: "Please contact support to proceed.", variant: "destructive" })}
            >
              <Trash2 className="h-4 w-4" /> Delete Account Permanently
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrivacyTab;
