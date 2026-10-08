import type { Project } from '../data/projects';
import { Icon } from './Icon';

function SyncVisual() {
  return <div className="sync-visual"><div className="visual-title"><span>METADATA SYNCHRONIZATION</span><span className="visual-tag">CONCEPT</span></div>
    <div className="sync-lanes"><div className="sync-source"><div className="document-stack"><i /><i /><i /><i /><i /></div><span>Source metadata</span></div><div className="sync-connection"><span>Bulk backfill</span><div className="connector"><i /></div><span>Ongoing events</span><div className="connector dotted"><i /></div></div><div className="sync-hub"><span className="hub-symbol">⇄</span><span>Sync</span></div><div className="sync-fan"><div /><div /><div /></div><div className="sync-targets">{['Service A', 'Service B', 'Service C'].map(item => <div key={item}><span className="tiny-square" />{item}<span className="checkmark">✓</span></div>)}</div></div>
    <div className="visual-foot"><span>EXISTING DATA + NEW CHANGES</span><span className="visual-accent">Consistent by design</span></div>
  </div>;
}
function BatchVisual() {
  return <div className="batch-visual"><div className="visual-title"><span>START REVIEW / PROCESSING</span><span className="visual-tag">CONCEPT</span></div><div className="batch-intro"><span>Up to <strong>3,000</strong> documents</span><span>→</span><span>Parallel batches</span></div><div className="batch-grid">{Array.from({ length: 48 }, (_, i) => <span className={`batch-document lane-${Math.floor(i / 12)}`} key={i} />)}</div><div className="batch-tracks">{['01', '02', '03', '04'].map(item => <div className="batch-track" key={item}><span>{item}</span><div><i /></div><span>✓</span></div>)}</div><div className="batch-outcome"><span>BOUNDED PARALLELISM</span><strong>&lt;30<span> seconds</span></strong></div></div>;
}
function SecurityVisual() {
  return <div className="security-visual"><div className="visual-title"><span className="scanmaster-wordmark"><span className="scanmaster-symbol">S<span>↗</span></span>ScanMasterPro</span><span className="visual-tag">WORKFLOW ILLUSTRATION</span></div><div className="security-center"><span className="security-kicker">AI APPLIED TO ENGINEERING</span><h4>Findings.<br />Into action.</h4><div className="security-glyph" aria-hidden="true"><span /><span /><span /><span /><span /></div></div><div className="security-workflow">{['Findings', 'AI-assisted analysis', 'Remediation', 'Validation'].map((item, i) => <div key={item}><span className="workflow-number">0{i + 1}</span><span>{item}</span>{i < 3 && <Icon name="arrow" width="13" height="13" />}</div>)}</div><div className="visual-foot"><span>GPT-POWERED · CODEX PLUGIN</span><span className="visual-accent">Built for the developer workflow</span></div></div>;
}
function ReliabilityVisual() {
  return <div className="reliability-visual"><div className="visual-title"><span>RELIABILITY / RELEASE CONFIDENCE</span><span className="visual-tag">VERIFIED OUTCOMES</span></div><div className="coverage-heading"><span>Unit test coverage</span><strong>39<span> → </span>85<span>%</span></strong></div><div className="coverage-bars"><div><span>Before</span><div><i style={{ width: '39%' }} /></div><span>39%</span></div><div><span>After</span><div><i style={{ width: '85%' }} /></div><span>85%</span></div></div><div className="reliability-path"><div><span>11 → 17</span><p>Java modernization</p></div><div><span>UCP → HikariCP</span><p>Connection reliability</p></div></div><div className="visual-foot"><span>AI-ASSISTED TEST GENERATION</span><span className="visual-accent">Confidence in the next release</span></div></div>;
}
export function WorkVisual({ kind }: { kind: Project['illustration'] }) {
  const descriptions = {
    sync: 'Conceptual metadata synchronization: bulk backfill and ongoing events connect source metadata to a synchronization layer and external services.',
    batch: 'Conceptual document processing: workflows of up to 3,000 documents are split into parallel batches, with optimized runtime under 30 seconds. The number of illustrated lanes is symbolic.',
    security: 'Conceptual ScanMasterPro workflow: findings, AI-assisted analysis, remediation, and validation. This is a workflow illustration, not a product screenshot.',
    reliability: 'Verified outcomes: unit test coverage increased from 39 to 85 percent, services modernized from Java 11 to 17, and connection pooling migrated from UCP to HikariCP.',
  };
  return <div className={`work-visual visual-${kind}`} role="img" aria-label={descriptions[kind]}>{kind === 'sync' ? <SyncVisual /> : kind === 'batch' ? <BatchVisual /> : kind === 'security' ? <SecurityVisual /> : <ReliabilityVisual />}</div>;
}
