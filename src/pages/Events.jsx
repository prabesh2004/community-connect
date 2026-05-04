import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
const events = [
    { id: 1, date: 'May 18', title: 'Riverfront Cleanup', location: 'Downtown', slots: '12 spots left' },
    { id: 2, date: 'May 24', title: 'Community Food Drive', location: 'Eastville', slots: '6 spots left' },
    { id: 3, date: 'June 2', title: 'Mentor Meetup', location: 'Northside', slots: '18 spots left' },
    { id: 4, date: 'June 9', title: 'Park Restoration', location: 'West End', slots: '9 spots left' },
];
export default function Events() {
    return (<div className="container mx-auto py-16 px-4 text-white">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Events</p>
        <h1 className="text-4xl font-bold tracking-tight">Community Calendar</h1>
        <p className="text-white/60 mt-3 max-w-2xl">
          Upcoming volunteer events, meetups, and community actions you can join right now.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (<motion.div key={event.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }}>
            <Card className="bg-white/5 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-white text-black border-white">{event.date}</Badge>
                  <span className="text-xs text-white/50 uppercase tracking-wide">{event.location}</span>
                </div>
                <CardTitle className="text-white mt-3">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <p className="text-sm text-white/60">{event.slots}</p>
                <Button className="bg-white text-black hover:bg-white/90">RSVP</Button>
              </CardContent>
            </Card>
          </motion.div>))}
      </div>
    </div>);
}
