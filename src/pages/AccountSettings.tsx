import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Bell, Shield, Lock, Settings } from "lucide-react";
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
  isNewsletterSubscribed: true,
};

const AccountSettings = () => {
  const [mockUser, setMockUser] = useState(mockUserData);
  const [activeTab, setActiveTab] = useState("profile");

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

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "email", label: "Email Preferences", icon: Mail },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy & Data", icon: Shield },
  ];

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

        {/* Main Content */}
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Mobile Tab Selector */}
            <div className="lg:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full px-4 py-3 bg-card border-2 border-border rounded-xl focus:outline-none focus:border-primary font-semibold text-foreground"
              >
                <option value="profile">📋 Profile Information</option>
                <option value="email">✉️ Email Preferences</option>
                <option value="notifications">🔔 Notifications</option>
                <option value="privacy">🔒 Privacy & Data</option>
              </select>
            </div>

            {/* Sidebar Navigation - Desktop */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="bg-card border border-border rounded-xl p-4 sticky top-24">
                {/* Sidebar Header */}
                <div className="flex items-center gap-2 px-4 pb-4 mb-2 border-b border-border">
                  <Settings className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Settings</h3>
                </div>

                {/* Navigation Buttons */}
                <nav className="space-y-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                          activeTab === tab.id
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-muted-foreground hover:bg-accent/50"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              {activeTab === "profile" && <ProfileTab user={mockUser} />}
              {activeTab === "email" && (
                <EmailTab
                  isSubscribed={mockUser.isNewsletterSubscribed}
                  onToggleSubscription={() =>
                    setMockUser({ ...mockUser, isNewsletterSubscribed: !mockUser.isNewsletterSubscribed })
                  }
                />
              )}
              {activeTab === "notifications" && <NotificationsTab />}
              {activeTab === "privacy" && <PrivacyTab />}
            </div>

          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default AccountSettings;
