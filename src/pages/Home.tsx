import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-black relative">
      <div className="particle-field" aria-hidden="true">
        <svg className="particle-lines" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <line x1="80" y1="60" x2="420" y2="120" />
          <line x1="420" y1="120" x2="720" y2="180" />
          <line x1="180" y1="260" x2="520" y2="320" />
          <line x1="520" y1="320" x2="860" y2="220" />
          <line x1="120" y1="420" x2="380" y2="500" />
          <line x1="380" y1="500" x2="760" y2="420" />
          <line x1="260" y1="140" x2="180" y2="260" />
          <line x1="520" y1="320" x2="420" y2="120" />
          <line x1="760" y1="420" x2="860" y2="220" />
        </svg>
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden flex-1 flex flex-col justify-center items-center text-center px-4 py-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 mb-6 animate-pulse-glow"
        >
          Local Impact • Real People
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl text-white"
        >
          Connect with the Causes You Care About
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl"
        >
          Nonprofits need your help, but finding the right opportunity can be tough. 
          CommUnity Connect bridges the gap, helping you find local volunteer roles that match your skills.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" asChild className="text-lg px-8 bg-white text-black hover:bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <Link to="/directory">Find Nonprofits</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 border-white/40 text-white hover:bg-white hover:text-black">
            <Link to="/about">Learn More</Link>
          </Button>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/70">
          <div className="border border-white/10 rounded-lg px-4 py-3 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">6 active nonprofits</div>
          <div className="border border-white/10 rounded-lg px-4 py-3 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">18 volunteer roles</div>
          <div className="border border-white/10 rounded-lg px-4 py-3 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">100% community-driven</div>
        </div>
      </section>

      {/* Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 relative z-10"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-left border border-white/10 rounded-2xl p-6 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Discover Local Needs</h3>
              <p className="text-white/70">Find out what organizations in your immediate community are looking for right now.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-left border border-white/10 rounded-2xl p-6 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Match Your Skills</h3>
              <p className="text-white/70">Filter opportunities based on what you're good at, whether that's mentoring, driving, or event planning.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-left border border-white/10 rounded-2xl p-6 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Make an Impact</h3>
              <p className="text-white/70">Directly connect with organizations and start making a tangible difference in your community.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Three steps to get involved</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Explore', desc: 'Browse nonprofits, events, and volunteer needs tailored to your interests.' },
              { step: '02', title: 'Match', desc: 'Filter by cause and skill to find the best fit for your availability.' },
              { step: '03', title: 'Commit', desc: 'Contact the nonprofit and get all the details in one place.' },
            ].map(item => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Number(item.step) * 0.05 }}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
              >
                <p className="text-sm text-white/50 mb-2">{item.step}</p>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Community voices</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">People already making impact</h2>
            </div>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">Share Your Story</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Avery P.', quote: 'I found a weekend cleanup team within minutes. The match tool is a lifesaver.' },
              { name: 'Jordan M.', quote: 'Our nonprofit doubled volunteers after listing opportunities here.' },
              { name: 'Sam K.', quote: 'The directory makes it easy to find causes that actually need help now.' },
            ].map(item => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
              >
                <p className="text-white/70">“{item.quote}”</p>
                <p className="mt-4 text-sm text-white/50">— {item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Systems Section */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Systems</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Built-in tools that make volunteering easier</h2>
            </div>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">Explore All Tools</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="border border-white/10 rounded-2xl p-6 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Volunteer Match Engine</h3>
              <p className="text-white/70">A quick system that pairs skills with local needs in seconds.</p>
              <ul className="mt-4 text-sm text-white/60 space-y-2">
                <li>• Skills-based suggestions</li>
                <li>• Time availability filter</li>
                <li>• Location proximity tags</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="border border-white/10 rounded-2xl p-6 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Impact Tracking</h3>
              <p className="text-white/70">See how many hours and events you have helped with.</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-2xl font-bold text-white">124</p>
                  <p className="text-xs text-white/60">Volunteer Hours</p>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-2xl font-bold text-white">37</p>
                  <p className="text-xs text-white/60">Events Supported</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="border border-white/10 rounded-2xl p-6 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Event Calendar</h3>
              <p className="text-white/70">Upcoming cleanup days, mentorship nights, and food drives.</p>
              <div className="mt-4 text-sm text-white/60 space-y-2">
                <div className="flex items-center justify-between border border-white/10 rounded-lg px-3 py-2">
                  <span>May 18</span>
                  <span>Park Cleanup</span>
                </div>
                <div className="flex items-center justify-between border border-white/10 rounded-lg px-3 py-2">
                  <span>May 24</span>
                  <span>Food Drive</span>
                </div>
                <div className="flex items-center justify-between border border-white/10 rounded-lg px-3 py-2">
                  <span>June 2</span>
                  <span>Mentor Meetup</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Events</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Upcoming Community Events</h2>
              <p className="text-white/60 mt-3 max-w-2xl">
                RSVP to upcoming cleanups, drives, and meetups.
              </p>
            </div>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { date: 'May 18', title: 'Riverfront Cleanup', location: 'Downtown', slots: '12 spots left' },
              { date: 'May 24', title: 'Community Food Drive', location: 'Eastville', slots: '6 spots left' },
              { date: 'June 2', title: 'Mentor Meetup', location: 'Northside', slots: '18 spots left' },
              { date: 'June 9', title: 'Park Restoration', location: 'West End', slots: '9 spots left' },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/60">{event.date}</span>
                  <span className="text-xs text-white/50">{event.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mt-3">{event.title}</h3>
                <p className="text-white/60 mt-2">{event.slots}</p>
                <Button className="mt-4 bg-white text-black hover:bg-white/90">RSVP</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Alerts Section */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Alerts</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Community Alerts</h2>
              <p className="text-white/60 mt-3 max-w-2xl">
                Time-sensitive updates from nonprofits and volunteer coordinators.
              </p>
            </div>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">Manage Alerts</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { level: 'Urgent', title: 'Flood cleanup volunteers needed', note: 'Riverfront cleanup this weekend.' },
              { level: 'New', title: 'Mentorship night added', note: 'Youth Code Academy opened 5 new spots.' },
              { level: 'Update', title: 'Food drive time change', note: 'Starts at 9AM instead of 10AM.' },
            ].map((alert, index) => (
              <motion.div
                key={alert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{alert.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/60">{alert.level}</span>
                </div>
                <p className="text-white/70 mt-2">{alert.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Submit Section */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 relative z-10"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Submit</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">List Your Nonprofit</h2>
            <p className="text-white/60 mt-3">
              Share your mission and volunteer needs with the community.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="org-name">Organization Name</label>
                <input id="org-name" className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm text-white" placeholder="Community Food Pantry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="org-email">Contact Email</label>
                <input id="org-email" className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm text-white" placeholder="contact@nonprofit.org" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="org-cause">Primary Cause</label>
                <input id="org-cause" className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm text-white" placeholder="Hunger Relief" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="org-location">Location</label>
                <input id="org-location" className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm text-white" placeholder="Downtown" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-white/70" htmlFor="org-about">About the Organization</label>
                <textarea id="org-about" className="w-full min-h-[120px] rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm text-white" placeholder="Tell us about your mission and volunteer needs." />
              </div>
              <div className="flex items-center gap-4 md:col-span-2">
                <Button className="bg-white text-black hover:bg-white/90">Submit Application</Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">Save Draft</Button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
