import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProfileTabProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    phone: string;
    country: string;
    dateOfBirth: string;
    title: string;
  };
}

const ProfileTab = ({ user }: ProfileTabProps) => {
  const { toast } = useToast();

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
                {["United States", "Namibia", "South Africa", "United Kingdom", "Germany", "France", "Netherlands", "Belgium", "Other"].map(c => (
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

export default ProfileTab;
