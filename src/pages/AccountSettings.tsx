import { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Bell, Shield, Camera, Lock, Trash2, Download, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const mockUserData = {
  firstName: "John",
  lastName: "Vanca",
  email: "jvanca0712@gmail.com",
  username: "jvanca0712",
  phone: "+264 81 234 5678",
  country: "United States",
  dateOfBirth: "1990-01-15",
  title: "Mr.",
  isLoggedIn: true,
};

/* ─── Profile Tab ─── */
const ProfileTab = ({ user }: { user: typeof mockUserData }) => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Profile Information</CardTitle>
        <CardDescription>Update your personal details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Avatar */}
        <div className="flex items-center gap-6">
          <div className="relative group">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback className="text-2xl bg-primary/10 text-primary font-bold">
                {user.firstName[0]}{user.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <button className="absolute inset-0 flex items-center justify-center bg-foreground/40 rounded-full opacity-0 group-hover:opacity-100 transition">
              <Camera className="h-5 w-5 text-primary-foreground" />
            </button>
          </div>
          <div>
            <p className="font-semibold text-foreground">Profile Photo</p>
            <p className="text-sm text-muted-foreground">PNG, JPG up to 5MB</p>
            <Button variant="outline" size="sm" className="mt-2">Upload New Photo</Button>
          </div>
        </div>

        {/* Form grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Title</Label>
            <Select defaultValue={user.title}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {["Mr.", "Mrs.", "Ms.", "Dr."].map(t => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Username</Label>
            <Input defaultValue={user.username} />
          </div>
          <div className="space-y-2">
            <Label>First Name</Label>
            <Input defaultValue={user.firstName} />
          </div>
          <div className="space-y-2">
            <Label>Last Name</Label>
            <Input defaultValue={user.lastName} />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" defaultValue={user.email} />
          </div>
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Input defaultValue={user.phone} />
          </div>
          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Input type="date" defaultValue={user.dateOfBirth} />
          </div>
          <div className="space-y-2">
            <Label>Country</Label>
            <Select defaultValue={user.country}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {["United States", "Namibia", "South Africa", "United Kingdom", "Germany", "Other"].map(c => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4 border-t border-border">
          <Button variant="outline" className="gap-2" onClick={() => toast({ title: "Change Password", description: "Password change dialog would open." })}>
            <Lock className="h-4 w-4" /> Change Password
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => toast({ title: "Profile updated", description: "Your changes have been saved." })}>
            Update Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

/* ─── Email Preferences Tab ─── */
const EmailTab = () => {
  const { toast } = useToast();
  const prefs = [
    { id: "weekly", label: "Weekly Travel Digest", desc: "Curated Namibia travel tips every Friday", default: true },
    { id: "deals", label: "Exclusive Deals & Offers", desc: "Be first to know about special rates", default: true },
    { id: "blog", label: "New Blog Posts", desc: "Get notified when we publish new articles", default: false },
    { id: "road", label: "Road Condition Updates", desc: "Important road alerts for your saved routes", default: true },
    { id: "product", label: "Product Updates", desc: "New features and app improvements", default: false },
  ];

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Email Preferences</CardTitle>
        <CardDescription>Choose what emails you receive from us</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        {prefs.map(p => (
          <div key={p.id} className="flex items-center justify-between py-4 border-b border-border last:border-0">
            <div>
              <p className="font-medium text-foreground">{p.label}</p>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
            <Switch defaultChecked={p.default} />
          </div>
        ))}
        <div className="pt-6">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => toast({ title: "Preferences saved" })}>
            Save Preferences
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

/* ─── Notifications Tab ─── */
const NotificationsTab = () => {
  const { toast } = useToast();
  const notifs = [
    { id: "push", label: "Push Notifications", desc: "Receive push alerts on your device", default: true },
    { id: "trip", label: "Trip Reminders", desc: "Reminders before your planned trips", default: true },
    { id: "comment", label: "Comment Replies", desc: "When someone replies to your comments", default: false },
    { id: "community", label: "Community Updates", desc: "Activity from travelers you follow", default: false },
  ];

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Notifications</CardTitle>
        <CardDescription>Control how and when we notify you</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        {notifs.map(n => (
          <div key={n.id} className="flex items-center justify-between py-4 border-b border-border last:border-0">
            <div>
              <p className="font-medium text-foreground">{n.label}</p>
              <p className="text-sm text-muted-foreground">{n.desc}</p>
            </div>
            <Switch defaultChecked={n.default} />
          </div>
        ))}
        <div className="pt-6">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => toast({ title: "Notification settings saved" })}>
            Save Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

/* ─── Privacy Tab ─── */
const PrivacyTab = () => {
  const { toast } = useToast();
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Privacy & Data</CardTitle>
        <CardDescription>Manage your data and privacy settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between py-4 border-b border-border">
          <div>
            <p className="font-medium text-foreground">Profile Visibility</p>
            <p className="text-sm text-muted-foreground">Allow others to see your profile and trips</p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between py-4 border-b border-border">
          <div>
            <p className="font-medium text-foreground">Activity Tracking</p>
            <p className="text-sm text-muted-foreground">Help us improve with anonymous usage data</p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between py-4 border-b border-border">
          <div>
            <p className="font-medium text-foreground">Third-Party Sharing</p>
            <p className="text-sm text-muted-foreground">Share data with our trusted partners</p>
          </div>
          <Switch />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <Button variant="outline" className="gap-2" onClick={() => toast({ title: "Preparing download…", description: "You'll receive an email with your data." })}>
            <Download className="h-4 w-4" /> Download My Data
          </Button>
          <Button variant="destructive" className="gap-2" onClick={() => toast({ title: "Account deletion", description: "Please contact support to proceed.", variant: "destructive" })}>
            <Trash2 className="h-4 w-4" /> Delete Account
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

/* ─── Main Page ─── */
const AccountSettings = () => {
  const [mockUser, setMockUser] = useState(mockUserData);

  if (!mockUser.isLoggedIn) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex items-center justify-center">
          <Card className="max-w-md w-full text-center p-10 border-border">
            <Lock className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Login Required</h2>
            <p className="text-muted-foreground mb-6">Please log in to view your account settings</p>
            <Button className="bg-primary text-primary-foreground" onClick={() => setMockUser({ ...mockUser, isLoggedIn: true })}>
              Log In (Demo)
            </Button>
            <p className="text-xs text-muted-foreground mt-3">This is a prototype – click to simulate login</p>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-padding">
        {/* Header */}
        <div className="section-container mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Account Settings</h1>
              <p className="text-muted-foreground mt-1">Manage your profile and preferences</p>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/10 text-primary font-bold">{mockUser.firstName[0]}{mockUser.lastName[0]}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-semibold text-foreground">{mockUser.firstName} {mockUser.lastName}</p>
                <p className="text-muted-foreground">{mockUser.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="section-container">
          <Tabs defaultValue="profile" className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar / tab list */}
            <TabsList className="flex lg:flex-col h-auto bg-card border border-border rounded-xl p-2 lg:w-64 shrink-0">
              <TabsTrigger value="profile" className="justify-start gap-2 w-full data-[state=active]:bg-accent"><User className="h-4 w-4" /> Profile</TabsTrigger>
              <TabsTrigger value="email" className="justify-start gap-2 w-full data-[state=active]:bg-accent"><Mail className="h-4 w-4" /> Email Preferences</TabsTrigger>
              <TabsTrigger value="notifications" className="justify-start gap-2 w-full data-[state=active]:bg-accent"><Bell className="h-4 w-4" /> Notifications</TabsTrigger>
              <TabsTrigger value="privacy" className="justify-start gap-2 w-full data-[state=active]:bg-accent"><Shield className="h-4 w-4" /> Privacy & Data</TabsTrigger>
            </TabsList>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <TabsContent value="profile"><ProfileTab user={mockUser} /></TabsContent>
              <TabsContent value="email"><EmailTab /></TabsContent>
              <TabsContent value="notifications"><NotificationsTab /></TabsContent>
              <TabsContent value="privacy"><PrivacyTab /></TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </Layout>
  );
};

export default AccountSettings;
