import { ArrowLeft, Activity, RefreshCw, Database, Trash2, ExternalLink, ChevronRight, Info, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const DefDevActions = () => {
  const actionTypes = [
    { type: "SYSTEM", color: "purple", examples: ["Boot sequence", "Settings changes", "Shutdown events"] },
    { type: "APP", color: "blue", examples: ["App opened", "App closed", "App errors"] },
    { type: "FILE", color: "cyan", examples: ["File created", "File read", "File deleted"] },
    { type: "USER", color: "yellow", examples: ["Button clicks", "Form inputs", "Navigation"] },
    { type: "SECURITY", color: "orange", examples: ["Login attempts", "Permission changes", "Lockdown events"] },
    { type: "WINDOW", color: "green", examples: ["Window opened", "Window closed", "Focus changes"] },
    { type: "ERROR", color: "red", examples: ["Runtime errors", "API failures", "Exceptions"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-amber-400">Actions Tab</h1>
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
            <Activity className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl font-bold text-amber-400">Actions Tab</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Monitor all system events and user interactions in real-time with optional persistence to localStorage.
          </p>
        </section>

        {/* Overview */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Overview</h3>
          <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-purple-400 mt-0.5" />
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  The Actions tab connects to the UrbanShade OS action bus via the <strong className="text-foreground">Action Dispatcher</strong>. 
                  It captures and displays all system events, user interactions, and application lifecycle events in real-time.
                </p>
                <p className="text-muted-foreground">
                  When <strong className="text-foreground">persistence</strong> is enabled, actions are also saved to localStorage, 
                  allowing you to analyze events across browser sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Types */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Action Types</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {actionTypes.map(({ type, color, examples }) => (
              <div key={type} className={`p-4 bg-${color}-500/10 border border-${color}-500/30 rounded-xl`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 rounded-full bg-${color}-500`} />
                  <h5 className={`font-bold text-${color}-400`}>{type}</h5>
                </div>
                <ul className="space-y-1">
                  {examples.map((ex) => (
                    <li key={ex} className="text-xs text-muted-foreground flex items-center gap-2">
                      <ChevronRight className={`w-3 h-3 text-${color}-400`} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Persistence */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Persistence</h3>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-cyan-400" />
              <h4 className="font-bold">LocalStorage Persistence</h4>
            </div>
            <p className="text-muted-foreground">
              When persistence is enabled, actions are saved to the <code className="px-1.5 py-0.5 bg-black/50 rounded text-cyan-400">def-dev-actions</code> localStorage key.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h5 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Benefits
                </h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Analyze events across sessions</li>
                  <li>• Track boot sequences</li>
                  <li>• Debug intermittent issues</li>
                  <li>• Review historical activity</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <h5 className="font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Considerations
                </h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Uses localStorage space</li>
                  <li>• Keeps last 500 actions</li>
                  <li>• May slow down with many events</li>
                  <li>• Cleared with "Clear Actions" button</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Persistence Works */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">How Persistence Works</h3>
          <div className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl">
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg text-center text-sm leading-8 text-blue-400 flex-shrink-0 font-bold">1</span>
                <div>
                  <h5 className="font-semibold text-foreground">On OS Boot</h5>
                  <p className="text-sm text-muted-foreground">
                    System checks if <code className="px-1 py-0.5 bg-black/50 rounded text-cyan-400">def-dev-persistence</code> is set to "enabled" in localStorage.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg text-center text-sm leading-8 text-blue-400 flex-shrink-0 font-bold">2</span>
                <div>
                  <h5 className="font-semibold text-foreground">If Enabled</h5>
                  <p className="text-sm text-muted-foreground">
                    The Action Dispatcher loads existing actions from localStorage and continues appending new ones.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg text-center text-sm leading-8 text-blue-400 flex-shrink-0 font-bold">3</span>
                <div>
                  <h5 className="font-semibold text-foreground">If Disabled</h5>
                  <p className="text-sm text-muted-foreground">
                    The system ignores any existing action data and operates as if no history exists.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg text-center text-sm leading-8 text-blue-400 flex-shrink-0 font-bold">4</span>
                <div>
                  <h5 className="font-semibold text-foreground">Toggle in DEF-DEV</h5>
                  <p className="text-sm text-muted-foreground">
                    Use the "Toggle Persistence" button in the Admin tab or Actions tab to enable/disable at any time.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Actions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Available Actions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-black/40 border border-white/10 rounded-xl flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-cyan-400 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-1">Refresh from localStorage</h5>
                <p className="text-xs text-muted-foreground">
                  Reload actions from localStorage to see the latest persisted events.
                </p>
              </div>
            </div>
            <div className="p-4 bg-black/40 border border-white/10 rounded-xl flex items-start gap-3">
              <Trash2 className="w-5 h-5 text-red-400 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-1">Clear Actions</h5>
                <p className="text-xs text-muted-foreground">
                  Clear all actions from memory and localStorage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
          <Link
            to="/docs/def-dev/console"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Console
          </Link>
          <Link
            to="/docs/def-dev/storage"
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 rounded-lg text-sm text-amber-400 transition-colors ml-auto"
          >
            Next: Storage Tab
            <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default DefDevActions;