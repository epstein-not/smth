import { ArrowLeft, Bug, AlertTriangle, FileWarning, Cpu, HardDrive, Zap, ExternalLink, ChevronRight, AlertCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";

const DefDevBugchecks = () => {
  const bugcheckTypes = [
    { code: "KERNEL_PANIC", hex: "0x00000001", severity: "critical", description: "Core system kernel failure" },
    { code: "CRITICAL_PROCESS_DIED", hex: "0x000000EF", severity: "critical", description: "Essential process terminated unexpectedly" },
    { code: "SYSTEM_SERVICE_EXCEPTION", hex: "0x0000003B", severity: "high", description: "System service threw an unhandled exception" },
    { code: "MEMORY_MANAGEMENT", hex: "0x0000001A", severity: "high", description: "Memory allocation or access error" },
    { code: "IRQL_NOT_LESS_OR_EQUAL", hex: "0x0000000A", severity: "high", description: "Invalid memory access at elevated IRQL" },
    { code: "PAGE_FAULT_IN_NONPAGED_AREA", hex: "0x00000050", severity: "high", description: "Referenced invalid system memory" },
    { code: "DRIVER_IRQL_NOT_LESS_OR_EQUAL", hex: "0x000000D1", severity: "medium", description: "Driver accessed paged memory incorrectly" },
    { code: "VIDEO_TDR_FAILURE", hex: "0x00000116", severity: "medium", description: "Display driver timeout or failure" },
    { code: "WHEA_UNCORRECTABLE_ERROR", hex: "0x00000124", severity: "critical", description: "Hardware error that cannot be corrected" },
    { code: "DPC_WATCHDOG_VIOLATION", hex: "0x00000133", severity: "high", description: "DPC routine exceeded time limit" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-amber-400">Testing Bugchecks</h1>
            <span className="text-xs text-muted-foreground">/ DEF-DEV Documentation</span>
          </div>
          <Link 
            to="/docs/def-dev" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:bg-amber-500/30 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to DEF-DEV
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Title */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Bug className="w-10 h-10 text-red-400" />
            <h2 className="text-4xl font-bold text-amber-400">Testing Bugchecks</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Learn how to trigger, analyze, and debug bugcheck (crash) screens in UrbanShade OS using the DEF-DEV console.
          </p>
        </section>

        {/* What is a Bugcheck */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">What is a Bugcheck?</h3>
          <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-400 mt-0.5" />
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  A <strong className="text-foreground">bugcheck</strong> (also known as a "blue screen" or "crash screen") occurs when the 
                  system encounters an error it cannot recover from. In UrbanShade OS, bugchecks are used to simulate real operating 
                  system crash behavior for testing and demonstration purposes.
                </p>
                <p className="text-muted-foreground">
                  Unlike actual operating system crashes, UrbanShade bugchecks are <strong className="text-foreground">non-destructive</strong> — 
                  they don't affect your actual computer or data. They're purely simulated within the browser environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Triggering Bugchecks */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Triggering Bugchecks from DEF-DEV</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                Method 1: Admin Panel Buttons
              </h4>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-amber-500/20 rounded text-center text-xs leading-5 text-amber-400 flex-shrink-0">1</span>
                  Navigate to /def-dev
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-amber-500/20 rounded text-center text-xs leading-5 text-amber-400 flex-shrink-0">2</span>
                  Click the "Admin" tab
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-amber-500/20 rounded text-center text-xs leading-5 text-amber-400 flex-shrink-0">3</span>
                  Find "Bugcheck Triggers" section
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-amber-500/20 rounded text-center text-xs leading-5 text-amber-400 flex-shrink-0">4</span>
                  Click any bugcheck type button
                </li>
              </ol>
            </div>

            <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <FileWarning className="w-5 h-5 text-amber-400" />
                Method 2: Terminal Commands
              </h4>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground">Use the DEF-DEV terminal to trigger bugchecks:</p>
                <div className="space-y-2 font-mono bg-black/50 p-3 rounded-lg">
                  <p><span className="text-green-400">$</span> bugcheck KERNEL_PANIC</p>
                  <p><span className="text-green-400">$</span> bugcheck MEMORY_MANAGEMENT</p>
                  <p><span className="text-green-400">$</span> bugcheck WHEA_UNCORRECTABLE_ERROR</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  The command queues the bugcheck and executes it on the main OS page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Bugcheck Types */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Available Bugcheck Types</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-semibold text-amber-400">Stop Code</th>
                  <th className="text-left py-3 px-4 font-semibold text-amber-400">Hex Code</th>
                  <th className="text-left py-3 px-4 font-semibold text-amber-400">Severity</th>
                  <th className="text-left py-3 px-4 font-semibold text-amber-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {bugcheckTypes.map((bc) => (
                  <tr key={bc.code} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-mono text-foreground">{bc.code}</td>
                    <td className="py-3 px-4 font-mono text-cyan-400">{bc.hex}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        bc.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                        bc.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {bc.severity}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{bc.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Command Queue System */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">How the Command Queue Works</h3>
          <div className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                DEF-DEV uses a <strong className="text-foreground">command queue system</strong> to execute commands on the main OS page. 
                This allows you to trigger crashes, bugchecks, and other system events from the DEF-DEV console without page redirects.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-black/40 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-purple-400" />
                    <h5 className="font-semibold text-foreground">1. Queue Command</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    DEF-DEV writes the command to localStorage as a pending action.
                  </p>
                </div>
                <div className="p-4 bg-black/40 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <HardDrive className="w-5 h-5 text-purple-400" />
                    <h5 className="font-semibold text-foreground">2. Poll & Detect</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Main OS polls localStorage 4x/second for pending commands.
                  </p>
                </div>
                <div className="p-4 bg-black/40 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <h5 className="font-semibold text-foreground">3. Execute</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Command is cleared from queue and executed immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analyzing Bugcheck Reports */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Analyzing Bugcheck Reports</h3>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl space-y-4">
            <p className="text-muted-foreground">
              After a bugcheck occurs, a report is saved to localStorage. You can view these reports in the DEF-DEV "Bugchecks" tab.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h5 className="font-semibold text-foreground">Report Contents</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-amber-400" />
                    Stop code and hex value
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-amber-400" />
                    Timestamp of occurrence
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-amber-400" />
                    Affected process or module
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-amber-400" />
                    Memory address (if applicable)
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-foreground">Available Actions</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-amber-400" />
                    Export reports as JSON
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-amber-400" />
                    Clear individual reports
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-amber-400" />
                    Clear all bugcheck history
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-amber-400" />
                    Replay a specific bugcheck
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-400 mt-0.5" />
            <div className="space-y-3">
              <h4 className="font-bold text-red-400">Important Notes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5" />
                  Bugchecks will interrupt any unsaved work in the simulated OS
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5" />
                  Repeatedly triggering bugchecks may fill localStorage with reports
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5" />
                  Some bugcheck types may require manual reboot to continue
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
          <Link
            to="/docs/def-dev/admin"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Admin
          </Link>
          <Link
            to="/docs/def-dev/api"
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 rounded-lg text-sm text-amber-400 transition-colors ml-auto"
          >
            Next: API Reference
            <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default DefDevBugchecks;