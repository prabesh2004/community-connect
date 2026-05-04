import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Submit() {
  return (
    <div className="container mx-auto py-16 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Submit</p>
        <h1 className="text-4xl font-bold tracking-tight">Nonprofit Submission</h1>
        <p className="text-white/60 mt-3 max-w-2xl">
          Apply to list your nonprofit and publish volunteer opportunities to the community.
        </p>
      </motion.div>

      <Card className="bg-white/5 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
        <CardHeader>
          <CardTitle className="text-white">Organization Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="org-name">Organization Name</Label>
            <Input id="org-name" placeholder="Community Food Pantry" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="org-email">Contact Email</Label>
            <Input id="org-email" placeholder="contact@nonprofit.org" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="org-cause">Primary Cause</Label>
            <Input id="org-cause" placeholder="Hunger Relief" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="org-location">Location</Label>
            <Input id="org-location" placeholder="Downtown" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="org-about">About the Organization</Label>
            <textarea
              id="org-about"
              className="w-full min-h-[120px] rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm text-white placeholder:text-white/40"
              placeholder="Tell us about your mission and volunteer needs."
            />
          </div>
          <div className="flex items-center gap-4 md:col-span-2">
            <Button className="bg-white text-black hover:bg-white/90">Submit Application</Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">Save Draft</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
