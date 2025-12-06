import { ArrowLeft, Terminal, Code, Zap, Database, Shield, ExternalLink, ChevronRight, Info, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const DefDevTerminal = () => {
  const commands = [
    { name: "help", args: "", description: "Show all available commands" },
    { name: "clear", args: "", description: "Clear the terminal screen" },
    { name: "echo", args: "[message]", description: "Print a message to the terminal" },
    { name: "status", args: "", description: "Show system status and persistence state" },
    { name: "crash", args: "[type]", description: "Queue a crash screen (KERNEL_PANIC, MEMORY_MANAGEMENT, etc.)" },
    { name: "bugcheck", args: "[code]", description: "Queue a bugcheck (FATAL_EXCEPTION, SYSTEM_CORRUPTION, etc.)" },
    { name: "reboot", args: "", description: "Queue a system reboot" },
    { name: "shutdown", args: "", description: "Queue a system shutdown" },
    { name: "lockdown", args: "", description: "Trigger facility lockdown mode" },
    { name: "recovery", args: "", description: "Boot into recovery mode" },
    { name: "wipe", args: "", description: "Clear all localStorage (DANGEROUS)" },
    { name: "ls", args: "", description: "List all localStorage keys" },
    { name: "get", args: "[key]", description: "Get a localStorage value" },
    { name: "set", args: "[key] [value]", description: "Set a localStorage value" },
    { name: "del", args: "[key]", description: "Delete a localStorage key" },
    { name: "toast", args: "[message]", description: "Show a toast notification" },
    { name: "queue", args: "", description: "Show pending commands in queue" },
    { name: "exec", args: "[command]", description: "Execute a raw command" },
  ];

  const categories = [
    { name: "System", commands: ["crash", "bugcheck", "reboot", "shutdown", "lockdown", "recovery", "wipe"], color: "red" },
    { name: "Storage", commands: ["ls", "get", "set", "del"], color: "cyan" },
    { name: "Utility", commands: ["help", "clear", "echo", "status", "toast", "queue", "exec"], color: "green" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-amber-400">DEF-DEV Terminal</h1>
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
            <Terminal className="w-10 h-10 text-green-400" />
            <h2 className="text-4xl font-bold text-amber-400">DEF-DEV Terminal</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A powerful command-line interface for executing admin commands, managing localStorage, and controlling the UrbanShade OS system.
          </p>
        </section>

        {/* Overview */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Overview</h3>
          <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-green-400 mt-0.5" />
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  The DEF-DEV Terminal provides direct access to system commands through a familiar command-line interface. 
                  Commands that affect the main OS page use the <strong className="text-foreground">command queue system</strong>, 
                  which the main OS polls 4 times per second.
                </p>
                <p className="text-muted-foreground">
                  Type <code className="px-1.5 py-0.5 bg-black/50 rounded text-green-400">help</code> to see all available commands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Command Categories */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Command Categories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className={`p-5 bg-${cat.color}-500/10 border border-${cat.color}-500/30 rounded-xl`}>
                <h4 className={`font-bold text-${cat.color}-400 mb-3`}>{cat.name} Commands</h4>
                <div className="space-y-1">
                  {cat.commands.map((cmd) => (
                    <div key={cmd} className="flex items-center gap-2">
                      <ChevronRight className={`w-3 h-3 text-${cat.color}-400`} />
                      <code className="text-sm font-mono text-foreground">{cmd}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Command Reference */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Command Reference</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-semibold text-amber-400">Command</th>
                  <th className="text-left py-3 px-4 font-semibold text-amber-400">Arguments</th>
                  <th className="text-left py-3 px-4 font-semibold text-amber-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {commands.map((cmd) => (
                  <tr key={cmd.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-mono text-green-400">{cmd.name}</td>
                    <td className="py-3 px-4 font-mono text-cyan-400">{cmd.args || "—"}</td>
                    <td className="py-3 px-4 text-muted-foreground">{cmd.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Usage Examples</h3>
          <div className="space-y-4">
            <div className="p-4 bg-black/60 border border-white/10 rounded-xl font-mono text-sm">
              <p className="text-muted-foreground mb-2"># Trigger a kernel panic crash</p>
              <p><span className="text-green-400">$</span> crash KERNEL_PANIC</p>
              <p className="text-yellow-400 mt-1">→ Queued crash: KERNEL_PANIC</p>
            </div>

            <div className="p-4 bg-black/60 border border-white/10 rounded-xl font-mono text-sm">
              <p className="text-muted-foreground mb-2"># Get and set localStorage values</p>
              <p><span className="text-green-400">$</span> get urbanshade_settings</p>
              <p className="text-cyan-400 mt-1">→ {"{'theme':'dark','sound':true}"}</p>
              <p className="mt-2"><span className="text-green-400">$</span> set mykey myvalue</p>
              <p className="text-green-400 mt-1">→ Set mykey = myvalue</p>
            </div>

            <div className="p-4 bg-black/60 border border-white/10 rounded-xl font-mono text-sm">
              <p className="text-muted-foreground mb-2"># Check system status</p>
              <p><span className="text-green-400">$</span> status</p>
              <p className="text-foreground mt-1">DEF-DEV v2.0</p>
              <p className="text-muted-foreground">Persistence: Enabled</p>
              <p className="text-muted-foreground">Queued commands: 0</p>
              <p className="text-muted-foreground">LocalStorage keys: 12</p>
            </div>
          </div>
        </section>

        {/* Command Queue */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Command Queue System</h3>
          <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
              <h4 className="font-bold text-purple-400">How It Works</h4>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Commands like <code className="px-1.5 py-0.5 bg-black/50 rounded text-green-400">crash</code>, 
                <code className="px-1.5 py-0.5 bg-black/50 rounded text-green-400 ml-1">reboot</code>, and 
                <code className="px-1.5 py-0.5 bg-black/50 rounded text-green-400 ml-1">shutdown</code> don't execute 
                immediately in DEF-DEV. Instead, they are queued to localStorage.
              </p>
              <p>
                The main OS page (<code className="px-1.5 py-0.5 bg-black/50 rounded text-cyan-400">/</code>) polls 
                localStorage 4 times per second for pending commands. When it finds one, it:
              </p>
              <ol className="ml-4 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-purple-500/20 rounded text-center text-xs leading-5 text-purple-400">1</span>
                  Reads the command from queue
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-purple-500/20 rounded text-center text-xs leading-5 text-purple-400">2</span>
                  Deletes the command from localStorage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-purple-500/20 rounded text-center text-xs leading-5 text-purple-400">3</span>
                  Executes the command immediately
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-400 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-bold text-red-400">Dangerous Commands</h4>
              <p className="text-sm text-muted-foreground">
                The <code className="px-1.5 py-0.5 bg-black/50 rounded text-red-400">wipe</code> command permanently 
                deletes all localStorage data. This includes settings, accounts, files, and all OS state. 
                Use with extreme caution.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
          <Link
            to="/docs/def-dev/storage"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Storage
          </Link>
          <Link
            to="/docs/def-dev/admin"
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 rounded-lg text-sm text-amber-400 transition-colors ml-auto"
          >
            Next: Admin Panel
            <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default DefDevTerminal;