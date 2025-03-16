# nextjs-courses-you-wish

A Nextjs Courses you wish you can knew sooner. I will walk through from the fundamentals to advance, real life features. I will cooked that by greatest ingredients: RAG, AI, Nextjs 15, RSC, PostgresSQL, Auth, React 19, Tanstack Query, TailwindCss V4.... Coming Soon - Do not rush

## The journey we will cooks

### Fundamental Path

- The basic principles of working with Next.js and App Router.
- The use of React Server Components (RSC) and methods of data fetching within them.
- The creation of API routes and the application of Server Actions for data modification.
- Client-side data fetching with React Query and interaction with Server Actions and API routes.
- Caching strategies in Next.js 15.
- Authentication and protection of routes and pages.
- Practical experience in developing a full-fledged application.
- Automatic optimization of Next.js builds depending on static and dynamic routes.

### Real Product Path

We will build a Huly clone app with the following features:

## Key Features

- SEO features: 
    - Sitemap
    - Rss Feed
    - JsonLD
    - Optimize performance
- 📱 Responsive Design
- Realtime chat with AI + Team members
- User Management
- 📝 Content Management(Text Editors) + Blog post with AI summarize features
- 📊 CRUD Table
- 🖼️ Upload Media like Image/Video/Documents on S3 Storage
- 🔒 Authentication + Authorization with ACL/RBAC
- 📊 Dashboard Reporting

## TechStack

### Engineering Setup

- Cursor: Code AI Editor
- v0.dev: Generative UI components
- Model:
    - Claude Sonnet 3.7: Agent AI in Cursor
    - Grok: Ask about technique stuff
    - Perplexity: Research topic
    - Qwq 32B

### AI Tools

- Interface LLMs: [OpenRouter](http://openrouter.ai/)
- Open AI keys
- [n8n](https://n8n.io) workflows crawls and take the summarization of articles on Internets

### Frontend

- Fetching API: [Better Fetch](https://better-fetch.vercel.app/docs)
- Auth Client: [Better Auth](https://www.better-auth.com/)
- State Management: XState
- Components: Use @shadcn/ui + Storybook to overview components
- Web: Use Nextjs 15 & React 19 & [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- Animation: Using [Motion](https://motion.dev/) & [Swup](https://swup.js.org) for smooth transition/animation

### Backend

- Database: PostgresSQL + PG Vectorize
- Use [Polar](http://polar.sh) for payments, unified API for one-off & subscription billing methods
- Queue: Handle the heavy workload on the background(client/server)
- ORM: Use [Prisma](https://www.prisma.io)
- Validation schema: [Zod](https://zod.dev/)
- Email: [Resend](https://react.email) Build and send emails using React
- Cache: [BentoCache](https://bentocache.dev/docs/introduction) --> In Memory + [DragonFly(Redis)](https://www.dragonflydb.io) cache
- Rate Limit
- [AxiomJs](https://axiom.co) all you need to debug, log & analyze in production
- Secure Headers

### Infrastructure

- Deploy with Docker --> AWS EC2
- Infrastructure as Code with Terraform --> automate the process of deploy + Zero Downtime Strategy
- CDN zero-config, low-latency, request life-cycle hooks, optimized request compressions (gzip)
- Traefik Integration: Automatically integrates with Traefik for routing and load balancing.
- Real-time Monitoring: Monitor CPU, memory, storage, and network usage for every resource.
- Compliance as Code, Policy as Code
- Detect, visualize, analyze and remediate security vulnerabilities
- Secure AWS Cloud and write secure IaC
- Secret Management

### CI/CD

- Automatically release process with Github Action
- Self-test CI/CD in local first with [Act](https://github.com/nektos/act)
- Have a lot of Bot/CLI(Rabbit AI, KnipJs, OXC...) + Checklist Guideline to help project always in high quality

### Development Experiences

- Use Git Workflow + Semantic commit + Rabbit AI to have great commit + review code!
- Spell checker will notified once there had typos
- Code Snippets say goodbye to the boilerplate
- Package Manager: [Bun](https://bun.sh)
- Leverage the [UnJs](https://github.com/unjs) ecosystem to have some incredible features like Auto Import and Framework Agnostic
