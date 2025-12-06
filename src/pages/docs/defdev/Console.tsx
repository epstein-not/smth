import { ArrowLeft, Terminal, Eye, Search, Pause, Play, Copy, Download, Trash2, Filter, ExternalLink, CheckCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";

const DefDevConsole = () => {
  const errorSimplifications = [
    { technical: "Cannot read properties of undefined", simple: "Something tried to use data that doesn't exist yet" },
    { technical: "Maximum call stack size exceeded", simple: "The system got stuck in a loop" },
    { technical: "Failed to fetch", simple: "Couldn't connect to the server" },
    { technical: "Unexpected token", simple: "The code has a syntax error" },
    { technical: "null is not an object", simple: "Tried to use something that wasn't set up properly" },
    { technical: "Permission denied", simple: "You don't have access to do that" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-amber-400">Console Tab</h1>
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
            <Terminal className="w-10 h-10 text-cyan-400" />
            <h2 className="text-4xl font-bold text-amber-400">Console Tab</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Real-time console logging with smart error simplification, filtering, and export capabilities.
          </p>
        </section>

        {/* Overview */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Overview</h3>
          <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-cyan-400 mt-0.5" />
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  The Console tab captures and displays all console output from UrbanShade OS, including logs, warnings, 
                  errors, and system messages. It intercepts the browser's console methods to provide a unified view of 
                  all system activity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="font-bold text-foreground">Simple/Technical Views</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Toggle between simplified human-readable error messages and raw technical output. 
                Simple view translates cryptic errors into plain language.
              </p>
            </div>

            <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="font-bold text-foreground">Search & Filter</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Search through logs by keyword and filter by log type (error, warn, info, debug). 
                Quickly find specific entries in large log files.
              </p>
            </div>

            <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Pause className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="font-bold text-foreground">Pause/Resume</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Pause logging to examine entries without auto-scrolling. Resume to continue 
                capturing new logs. Essential for analyzing rapid log sequences.
              </p>
            </div>

            <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Filter className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="font-bold text-foreground">Log Type Colors</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Logs are color-coded by type: red for errors, yellow for warnings, blue for info, 
                and gray for debug messages. Quick visual identification at a glance.
              </p>
            </div>
          </div>
        </section>

        {/* Actions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Available Actions</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Copy className="w-5 h-5 text-cyan-400" />
                <h5 className="font-semibold text-foreground">Copy Logs</h5>
              </div>
              <p className="text-xs text-muted-foreground">
                Copy all visible logs to clipboard in plain text format. Useful for sharing with others or pasting into reports.
              </p>
            </div>

            <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Download className="w-5 h-5 text-cyan-400" />
                <h5 className="font-semibold text-foreground">Export</h5>
              </div>
              <p className="text-xs text-muted-foreground">
                Download logs as a .txt file with timestamps. Creates a permanent record for later analysis.
              </p>
            </div>

            <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Trash2 className="w-5 h-5 text-red-400" />
                <h5 className="font-semibold text-foreground">Clear</h5>
              </div>
              <p className="text-xs text-muted-foreground">
                Clear all captured logs from the current session. Does not affect browser console or localStorage.
              </p>
            </div>
          </div>
        </section>

        {/* Error Simplification */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Smart Error Simplification</h3>
          <div className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-xl">
            <p className="text-muted-foreground mb-6">
              Technical errors are automatically translated into plain language. Click any error entry to expand and see the full technical details.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 font-semibold text-red-400">Technical Error</th>
                    <th className="text-left py-3 px-4 font-semibold text-green-400">Simplified Message</th>
                  </tr>
                </thead>
                <tbody>
                  {errorSimplifications.map((err, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-3 px-4 font-mono text-red-400/80 text-xs">{err.technical}</td>
                      <td className="py-3 px-4 text-green-400/80">{err.simple}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Tips & Best Practices</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-black/40 border border-white/10 rounded-xl flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-1">Use Pause for Analysis</h5>
                <p className="text-xs text-muted-foreground">
                  When debugging rapid log sequences, pause the console to prevent auto-scrolling.
                </p>
              </div>
            </div>
            <div className="p-4 bg-black/40 border border-white/10 rounded-xl flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-1">Filter by Type</h5>
                <p className="text-xs text-muted-foreground">
                  Focus on errors only when troubleshooting issues. Hide info logs to reduce noise.
                </p>
              </div>
            </div>
            <div className="p-4 bg-black/40 border border-white/10 rounded-xl flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-1">Export Before Clearing</h5>
                <p className="text-xs text-muted-foreground">
                  Always export logs before clearing if you need to preserve them for later review.
                </p>
              </div>
            </div>
            <div className="p-4 bg-black/40 border border-white/10 rounded-xl flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-1">Technical View for Debugging</h5>
                <p className="text-xs text-muted-foreground">
                  Switch to technical view when you need stack traces and exact error messages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
          <Link
            to="/docs/def-dev/setup"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Setup
          </Link>
          <Link
            to="/docs/def-dev/actions"
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 rounded-lg text-sm text-amber-400 transition-colors ml-auto"
          >
            Next: Actions Tab
            <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default DefDevConsole;