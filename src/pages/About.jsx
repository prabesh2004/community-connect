export default function About() {
    return (<div className="container mx-auto py-16 px-4 max-w-4xl text-white">
      <h1 className="text-4xl font-bold tracking-tight mb-8">About CommUnity Connect</h1>
      
      <div className="prose prose-invert lg:prose-lg max-w-none">
        <p className="text-xl text-white/70 mb-8">
          CommUnity Connect is a community platform that helps people discover local nonprofits and find meaningful
          ways to contribute their time and skills. It brings opportunities, events, and volunteer roles into one
          clear place so getting involved feels simple and direct.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Why It Exists</h2>
        <p>
          Nonprofits are busy doing the work, and their volunteer needs change week by week. At the same time,
          community members want to help but often don't know where to start. This platform reduces that gap by
          making needs visible, searchable, and easy to act on.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What It Does</h2>
        <p>
          CommUnity Connect offers a nonprofit directory, skill-based filters, event highlights, and
          quick ways to connect. You can browse by cause, search by keyword, and match your skills to
          the opportunities that need them most.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Platform Highlights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Directory:</strong> Browse local nonprofits and learn exactly what they need.</li>
          <li><strong>Skills Match:</strong> Filter by skills to find the best fit for your time.</li>
          <li><strong>Events:</strong> Track upcoming opportunities and community gatherings.</li>
          <li><strong>Impact:</strong> See how volunteer efforts add up across causes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Open Source</h2>
        <p>
          CommUnity Connect is an open-source project. You can view the source code, 
          report issues, or contribute to the platform on our{' '}
          <a 
            href="https://github.com/prabesh2004/community-connect" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white underline hover:text-white/80 transition-colors"
          >
            GitHub Repository
          </a>.
        </p>
      </div>
    </div>);
}
