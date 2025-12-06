import { ArrowLeft, Shield, Zap, Bug, RefreshCw, Trash2, AlertTriangle, ExternalLink, Terminal, Lock, Power, HardDrive, ChevronRight, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const DefDevAdmin = () => {
  const crashTypes = [
    { name: "KERNEL_PANIC", description: "Core system kernel failure", color: "red" },
    { name: "CRITICAL_PROCESS_DIED", description: "Essential process terminated", color: "red" },
    { name: "MEMORY_MANAGEMENT", description: "Memory allocation error", color: "orange" },
    { name: "SYSTEM_SERVICE_EXCEPTION", description: "System service exception", color: "orange" },
    { name: "VIDEO_TDR_FAILURE", description: "Display driver timeout", color: "yellow" },
  ];

  const systemControls = [
    { name: "Force Reboot", icon: RefreshCw, description: "Queue a system reboot command", color: "blue" },
    { name: "Force Shutdown", icon: Power, description: "Queue a system shutdown command", color: "purple" },
    { name: "Lockdown Mode", icon: Lock, description: "Trigger facility lockdown screen", color: "orange" },
    { name: "Recovery Mode", icon: HardDrive, description: "Boot into recovery environment", color: "cyan" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-amber-400">Admin Panel</h1>
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
            <Shield className="w-10 h-10 text-red-400" />
            <h2 className="text-4xl font-bold text-amber-400">Admin Panel</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Advanced administrative controls for testing crash screens, triggering system states, and managing the OS image.
          </p>
        </section>

        {/* Command Queue */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Command Queue System</h3>
          <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
            <p className="text-muted-foreground mb-4">
              The Admin panel uses a <strong className="text-foreground">command queue system</strong> to execute commands on the main OS page. 
              When you click a button in DEF-DEV Admin, it queues a command that the main OS page polls for and executes.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full" />
                <span className="text-muted-foreground">Polling rate: 4x per second</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-muted-foreground">Commands execute in real-time</span>
              </div>
            </div>
          </div>
        </section>

        {/* Crash Screen Triggers */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Crash Screen Triggers</h3>
          <p className="text-muted-foreground">
            Trigger various crash screen types to test error handling and user experience. Each crash type simulates a different system failure.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {crashTypes.map((crash) => (
              <div key={crash.name} className={`p-4 bg-${crash.color}-500/10 border border-${crash.color}-500/30 rounded-xl`}>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className={`w-5 h-5 text-${crash.color}-400`} />
                  <h5 className={`font-semibold text-${crash.color}-400 text-sm`}>{crash.name}</h5>
                </div>
                <p className="text-xs text-muted-foreground">{crash.description}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-blue-400">Note:</strong> Crash screens triggered from DEF-DEV display the same crash screen 
              users would see during an actual error. Use the "Debug Error" button on the crash screen to return to DEF-DEV.
            </p>
          </div>
        </section>

        {/* Bugcheck Triggers */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Bugcheck Triggers</h3>
          <p className="text-muted-foreground">
            Bugchecks are more detailed crash reports with specific stop codes. They provide diagnostic information similar to Windows BSOD.
          </p>
          
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Bug className="w-6 h-6 text-red-400" />
              <h4 className="font-bold">Available Bugcheck Types</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-red-400" />
                <span className="font-mono text-red-400">FATAL_EXCEPTION</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-red-400" />
                <span className="font-mono text-red-400">SYSTEM_CORRUPTION</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-red-400" />
                <span className="font-mono text-red-400">HARDWARE_FAILURE</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-red-400" />
                <span className="font-mono text-red-400">DRIVER_FAULT</span>
              </div>
            </div>
            <Link 
              to="/docs/def-dev/bugchecks" 
              className="inline-flex items-center gap-2 mt-4 text-amber-400 text-sm hover:underline"
            >
              View full bugcheck documentation
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* System Controls */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">System Controls</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {systemControls.map((ctrl) => (
              <div key={ctrl.name} className={`p-5 bg-${ctrl.color}-500/10 border border-${ctrl.color}-500/30 rounded-xl`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 bg-${ctrl.color}-500/20 rounded-lg flex items-center justify-center`}>
                    <ctrl.icon className={`w-5 h-5 text-${ctrl.color}-400`} />
                  </div>
                  <h5 className={`font-semibold text-${ctrl.color}-400`}>{ctrl.name}</h5>
                </div>
                <p className="text-sm text-muted-foreground">{ctrl.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Terminal Commands */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Terminal Commands</h3>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-green-400" />
              <h4 className="font-bold">Admin-Related Terminal Commands</h4>
            </div>
            <div className="space-y-2 font-mono text-sm bg-black/50 p-4 rounded-lg">
              <p><span className="text-green-400">$</span> crash <span className="text-muted-foreground">[type]</span> <span className="text-gray-500"># Trigger crash screen</span></p>
              <p><span className="text-green-400">$</span> bugcheck <span className="text-muted-foreground">[code]</span> <span className="text-gray-500"># Trigger bugcheck</span></p>
              <p><span className="text-green-400">$</span> reboot <span className="text-gray-500"># Queue system reboot</span></p>
              <p><span className="text-green-400">$</span> shutdown <span className="text-gray-500"># Queue system shutdown</span></p>
              <p><span className="text-green-400">$</span> lockdown <span className="text-gray-500"># Trigger lockdown mode</span></p>
              <p><span className="text-green-400">$</span> recovery <span className="text-gray-500"># Boot to recovery</span></p>
              <p><span className="text-green-400">$</span> wipe <span className="text-gray-500"># Wipe all localStorage</span></p>
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-red-500/30 pb-2 text-red-400">Danger Zone</h3>
          <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-400 mt-0.5" />
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-red-400 mb-2">WIPE SYSTEM</h4>
                  <p className="text-sm text-muted-foreground">
                    Completely clears all localStorage data, removing all settings, accounts, files, and bugcheck history. 
                    The system will require a fresh installation after wiping.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-400 mb-2">Spam Errors</h4>
                  <p className="text-sm text-muted-foreground">
                    Dispatches multiple test error actions rapidly. Useful for testing action logging performance but may 
                    fill up localStorage quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-400 mt-0.5" />
            <div>
              <h4 className="font-bold text-yellow-400 mb-2">Important</h4>
              <p className="text-sm text-muted-foreground">
                Admin panel actions are queued and executed on the main OS page. Make sure you have the main OS page 
                open in another tab when using these features, or the commands will execute the next time you visit the main page.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
          <Link
            to="/docs/def-dev/terminal"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Terminal
          </Link>
          <Link
            to="/docs/def-dev/bugchecks"
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 rounded-lg text-sm text-amber-400 transition-colors ml-auto"
          >
            Next: Testing Bugchecks
            <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default DefDevAdmin;