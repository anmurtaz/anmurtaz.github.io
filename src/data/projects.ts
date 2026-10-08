export type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  technologies: string[];
  problem: string;
  approach: string;
  decision: string;
  outcome: string;
  illustration: 'sync' | 'batch' | 'security' | 'reliability';
};

export const projects: Project[] = [
  {
    id: 'metadata-synchronization',
    number: '01',
    category: 'Distributed systems / Data consistency',
    title: 'Metadata Synchronization',
    subtitle: 'Keeping systems in sync.',
    description: 'A scalable metadata synchronization architecture connecting Aconex and external services — bringing existing data across, then keeping it consistent as it changes.',
    metric: 'Bulk + event-driven',
    metricLabel: 'Two complementary paths to data consistency',
    technologies: ['Distributed systems', 'Event-driven synchronization', 'Bulk backfill'],
    problem: 'Metadata needed to remain consistent between Aconex and external services, including both existing records and ongoing changes.',
    approach: 'Designed a scalable architecture combining bulk backfill with event-driven synchronization.',
    decision: 'Existing data and new changes have different needs. Combining backfill with an event-driven path addresses both without treating synchronization as a one-time transfer.',
    outcome: 'Enabled real-time metadata consistency between Aconex and external services at scale.',
    illustration: 'sync',
  },
  {
    id: 'document-processing',
    number: '02',
    category: 'Performance engineering / Enterprise workflows',
    title: 'Start Review Optimization',
    subtitle: 'Less waiting. More throughput.',
    description: 'Re-architecting Start Review for document-heavy workflows. Parallel batches and fixed-thread execution brought large workloads into a much shorter processing window.',
    metric: '<30 seconds',
    metricLabel: 'Processing for workflows with up to 3,000 documents',
    technologies: ['Java', 'Parallel batch processing', 'Fixed-thread execution'],
    problem: 'Start Review needed to process workflows containing up to 3,000 documents efficiently.',
    approach: 'Re-architected processing around parallel batches and fixed-thread execution.',
    decision: 'Batching and a fixed number of execution threads made parallelism deliberate and bounded rather than allowing each document to create its own execution path.',
    outcome: 'Reduced processing runtime to under 30 seconds for the documented workload.',
    illustration: 'batch',
  },
  {
    id: 'scanmasterpro',
    number: '03',
    category: 'Generative AI / Security / Developer productivity',
    title: 'ScanMasterPro',
    subtitle: 'AI, put to engineering work.',
    description: 'ScanMasterPro is a GPT-powered security remediation platform I built to help turn security findings into engineering action. Integrated as an Oracle-supported Codex plugin.',
    metric: 'Up to 2 days',
    metricLabel: 'Developer remediation effort saved per release',
    technologies: ['Generative AI', 'Security remediation', 'Codex plugin'],
    problem: 'Security analysis and remediation consume developer effort within release workflows.',
    approach: 'Built ScanMasterPro, a GPT-powered security remediation platform, and integrated it as an Oracle-supported Codex plugin.',
    decision: 'Apply Generative AI to a concrete engineering workflow: interpreting findings and assisting remediation, rather than presenting AI as a separate destination.',
    outcome: 'Adopted across Aconex teams and reduced remediation effort by up to two developer-days per release.',
    illustration: 'security',
  },
  {
    id: 'production-reliability',
    number: '04',
    category: 'Production reliability / Platform modernization',
    title: 'Production Reliability & Modernization',
    subtitle: 'Built to keep running.',
    description: 'Investigating recurring database connection issues, modernizing the platform, and strengthening the confidence behind each release.',
    metric: '39% → 85%',
    metricLabel: 'Unit test coverage with AI-assisted test generation',
    technologies: ['Java 17', 'Spring Boot / Helidon', 'HikariCP', 'OCI'],
    problem: 'Recurring Oracle connection issues affected reliability, while the platform required modernization and stronger test coverage.',
    approach: 'Diagnosed the connection issues and migrated pooling from UCP to HikariCP. Migrated services from Java 11 to Java 17, upgraded Spring Boot and Helidon, and used AI-assisted test generation.',
    decision: 'Address the underlying reliability issue while improving the platform and the tests that support future changes.',
    outcome: 'Improved production reliability, completed modernization with zero production disruption, and increased unit test coverage from 39% to 85%. Separately, led remediation of 500+ security findings across five services and resolved a Sev1 incident.',
    illustration: 'reliability',
  },
];
