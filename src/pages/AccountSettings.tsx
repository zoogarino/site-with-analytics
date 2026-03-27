import { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Bell, Shield, Lock } from "lucide-react";
import { motion } from "framer-motion";
import ProfileTab from "@/components/account/ProfileTab";
import EmailTab from "@/components/account/EmailTab";
import NotificationsTab from "@/components/account/NotificationsTab";
import PrivacyTab from "@/components/account/PrivacyTab";

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
            <TabsList className="flex lg:flex-col h-auto bg-card border border-border rounded-xl p-2 lg:w-64 shrink-0">
              <TabsTrigger value="profile" className="justify-start gap-2 w-full data-[state=active]:bg-accent"><User className="h-4 w-4" /> Profile</TabsTrigger>
              <TabsTrigger value="email" className="justify-start gap-2 w-full data-[state=active]:bg-accent"><Mail className="h-4 w-4" /> Email Preferences</TabsTrigger>
              <TabsTrigger value="notifications" className="justify-start gap-2 w-full data-[state=active]:bg-accent"><Bell className="h-4 w-4" /> Notifications</TabsTrigger>
              <TabsTrigger value="privacy" className="justify-start gap-2 w-full data-[state=active]:bg-accent"><Shield className="h-4 w-4" /> Privacy & Data</TabsTrigger>
            </TabsList>

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
