import { ArrowLeft, Database, Search, Download, Trash2, ExternalLink, CheckCircle, Info, Key, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";

const DefDevStorage = () => {
  const commonKeys = [
    { key: "urbanshade_admin", description: "Admin account credentials and settings" },
    { key: "urbanshade_accounts", description: "All user account data" },
    { key: "urbanshade_settings", description: "System settings and preferences" },
    { key: "urbanshade_installed", description: "Installation completion flag" },
    { key: "urbanshade_bugchecks", description: "Stored bugcheck/crash reports" },
    { key: "urbanshade_files", description: "Virtual file system data" },
    { key: "urbanshade_bios", description: "BIOS configuration settings" },
    { key: "def-dev-actions", description: "Persisted action log entries" },
    { key: "def-dev-persistence", description: "Persistence enabled/disabled flag" },
    { key: "urbanshade_command_queue", description: "Pending commands from DEF-DEV" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-amber-400">Storage Tab</h1>
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
            <Database className="w-10 h-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-amber-400">Storage Tab</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            View, search, and manage all localStorage entries used by UrbanShade OS.
          </p>
        </section>

        {/* Overview */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Overview</h3>
          <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-400 mt-0.5" />
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  The Storage tab provides a complete view of all localStorage entries used by UrbanShade OS. 
                  You can view raw values, search by key name, and manage entries directly from the DEF-DEV console.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-black/40 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Search className="w-5 h-5 text-blue-400" />
                <h5 className="font-semibold text-foreground">Search Entries</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Search through localStorage keys by name. Useful for finding specific settings or data.
              </p>
            </div>
            <div className="p-5 bg-black/40 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Key className="w-5 h-5 text-blue-400" />
                <h5 className="font-semibold text-foreground">View Raw Values</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Expand any entry to see its raw JSON value. Useful for debugging data formats.
              </p>
            </div>
            <div className="p-5 bg-black/40 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <HardDrive className="w-5 h-5 text-blue-400" />
                <h5 className="font-semibold text-foreground">Storage Metrics</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                View total storage size and entry count. Monitor localStorage usage.
              </p>
            </div>
            <div className="p-5 bg-black/40 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Download className="w-5 h-5 text-blue-400" />
                <h5 className="font-semibold text-foreground">Export Snapshot</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Export all localStorage data as a JSON file for backup or analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Common Keys */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Common Storage Keys</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-semibold text-amber-400">Key</th>
                  <th className="text-left py-3 px-4 font-semibold text-amber-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {commonKeys.map((item) => (
                  <tr key={item.key} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-mono text-cyan-400">{item.key}</td>
                    <td className="py-3 px-4 text-muted-foreground">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Terminal Commands */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Terminal Commands for Storage</h3>
          <div className="p-6 bg-black/60 border border-white/10 rounded-xl font-mono text-sm space-y-2">
            <p><span className="text-green-400">$</span> ls <span className="text-gray-500"># List all localStorage keys</span></p>
            <p><span className="text-green-400">$</span> get <span className="text-cyan-400">[key]</span> <span className="text-gray-500"># Get a specific value</span></p>
            <p><span className="text-green-400">$</span> set <span className="text-cyan-400">[key]</span> <span className="text-yellow-400">[value]</span> <span className="text-gray-500"># Set a value</span></p>
            <p><span className="text-green-400">$</span> del <span className="text-cyan-400">[key]</span> <span className="text-gray-500"># Delete a key</span></p>
            <p><span className="text-green-400">$</span> wipe <span className="text-gray-500"># Clear ALL localStorage (dangerous!)</span></p>
          </div>
        </section>

        {/* Tips */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Tips</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-black/40 border border-white/10 rounded-xl flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-1">Export Before Changes</h5>
                <p className="text-xs text-muted-foreground">
                  Always export a snapshot before making significant changes or clearing storage.
                </p>
              </div>
            </div>
            <div className="p-4 bg-black/40 border border-white/10 rounded-xl flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-1">Use Terminal for Edits</h5>
                <p className="text-xs text-muted-foreground">
                  The terminal's set command allows direct value editing without UI limitations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
          <div className="flex items-start gap-4">
            <Trash2 className="w-6 h-6 text-red-400 mt-0.5" />
            <div>
              <h4 className="font-bold text-red-400 mb-2">Caution</h4>
              <p className="text-sm text-muted-foreground">
                Modifying or deleting storage keys can break UrbanShade OS functionality. 
                Some keys are critical for system operation. Make sure you understand what 
                a key does before modifying or deleting it.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
          <Link
            to="/docs/def-dev/actions"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Actions
          </Link>
          <Link
            to="/docs/def-dev/terminal"
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 rounded-lg text-sm text-amber-400 transition-colors ml-auto"
          >
            Next: DEF-DEV Terminal
            <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default DefDevStorage;