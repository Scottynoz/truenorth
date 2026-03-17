import { useState } from 'react'
import { Lock, Unlock, DollarSign, TrendingUp, CreditCard, BarChart3, AlertCircle, Download, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// Admin credentials (in production, this would be server-side)
const ADMIN_PASSWORD = 'TrueNorth2024!'

// Mock data for demonstration
const mockApplications = [
  { id: 1, date: '2024-03-10', name: 'John Smith', type: 'Personal', amount: '$45,000', status: 'Submitted', lender: 'TD Canada Trust' },
  { id: 2, date: '2024-03-09', name: 'Sarah Johnson', type: 'Personal', amount: '$89,000', status: 'Submitted', lender: 'RBC' },
  { id: 3, date: '2024-03-08', name: 'Mike Chen', type: 'Business', amount: '$120,000', status: 'Submitted', lender: 'CIBC (CSBFP)' },
  { id: 4, date: '2024-03-07', name: 'Emma Wilson', type: 'Personal', amount: '$35,000', status: 'Approved', lender: 'LightStream' },
  { id: 5, date: '2024-03-06', name: 'David Brown', type: 'Personal', amount: '$67,000', status: 'Submitted', lender: 'Scotiabank' },
]

const mockTraffic = [
  { date: '2024-03-10', visitors: 342, pageViews: 892, applications: 5 },
  { date: '2024-03-09', visitors: 298, pageViews: 756, applications: 3 },
  { date: '2024-03-08', visitors: 415, pageViews: 1023, applications: 4 },
  { date: '2024-03-07', visitors: 367, pageViews: 891, applications: 6 },
  { date: '2024-03-06', visitors: 289, pageViews: 712, applications: 2 },
  { date: '2024-03-05', visitors: 401, pageViews: 987, applications: 4 },
  { date: '2024-03-04', visitors: 356, pageViews: 834, applications: 3 },
]

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'overview' | 'applications' | 'financials' | 'costs'>('overview')

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid password. Please try again.')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword('')
    setActiveTab('overview')
  }

  if (!isAuthenticated) {
    return (
      <section id="admin" className="py-24 lg:py-32 bg-slate-900 min-h-screen">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-slate-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Admin Access</h2>
              <p className="text-muted-foreground text-sm">
                This area is password protected. Enter your credentials to access the dashboard.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="adminPassword">Password</Label>
                <Input
                  id="adminPassword"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <Button onClick={handleLogin} className="w-full bg-slate-900 hover:bg-slate-800">
                <Unlock className="w-4 h-4 mr-2" />
                Access Dashboard
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-xs text-muted-foreground">
                Unauthorized access is prohibited. All login attempts are logged.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="admin" className="py-8 lg:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
            <p className="text-muted-foreground text-sm">Business analytics and application management</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-emerald-600 border-emerald-200">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
              Live Data
            </Badge>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'applications', label: 'Applications', icon: CreditCard },
            { id: 'financials', label: 'Revenue & Projections', icon: TrendingUp },
            { id: 'costs', label: 'Operating Costs', icon: DollarSign },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Visitors (7d)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2,468</div>
                  <div className="flex items-center gap-1 text-sm text-emerald-600 mt-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+12.5%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Applications (7d)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">27</div>
                  <div className="flex items-center gap-1 text-sm text-emerald-600 mt-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+23%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1.09%</div>
                  <div className="flex items-center gap-1 text-sm text-emerald-600 mt-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+0.3%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Est. Revenue (Mo)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$3,240</div>
                  <div className="flex items-center gap-1 text-sm text-emerald-600 mt-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+18%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Traffic Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Traffic & Applications (Last 7 Days)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end gap-2">
                  {mockTraffic.map((day, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex flex-col gap-1">
                        <div 
                          className="w-full bg-emerald-200 rounded-t"
                          style={{ height: `${(day.visitors / 500) * 150}px` }}
                        />
                        <div 
                          className="w-full bg-emerald-500 rounded-t"
                          style={{ height: `${(day.applications / 10) * 50}px` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {day.date.split('-')[2]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-6 mt-4 justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-200 rounded" />
                    <span className="text-sm text-muted-foreground">Visitors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded" />
                    <span className="text-sm text-muted-foreground">Applications</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Applications</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Lender</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockApplications.slice(0, 5).map((app) => (
                      <TableRow key={app.id}>
                        <TableCell>{app.date}</TableCell>
                        <TableCell className="font-medium">{app.name}</TableCell>
                        <TableCell>
                          <Badge variant={app.type === 'Business' ? 'default' : 'secondary'}>
                            {app.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{app.amount}</TableCell>
                        <TableCell>
                          <Badge className={app.status === 'Approved' ? 'bg-emerald-500' : 'bg-amber-500'}>
                            {app.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{app.lender}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>All Applications</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Lender</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockApplications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>#{app.id}</TableCell>
                      <TableCell>{app.date}</TableCell>
                      <TableCell className="font-medium">{app.name}</TableCell>
                      <TableCell>
                        <Badge variant={app.type === 'Business' ? 'default' : 'secondary'}>
                          {app.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{app.amount}</TableCell>
                      <TableCell>
                        <Badge className={app.status === 'Approved' ? 'bg-emerald-500' : 'bg-amber-500'}>
                          {app.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{app.lender}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Model & Projections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-emerald-50 rounded-xl p-6">
                    <h4 className="font-semibold text-emerald-800 mb-2">Affiliate Commissions</h4>
                    <p className="text-3xl font-bold text-emerald-600">$50 - $500</p>
                    <p className="text-sm text-emerald-700 mt-1">Per approved loan</p>
                    <p className="text-xs text-emerald-600 mt-3">
                      Lenders pay 1-3% of loan value for qualified referrals
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-800 mb-2">Product Referrals</h4>
                    <p className="text-3xl font-bold text-blue-600">4% - 10%</p>
                    <p className="text-sm text-blue-700 mt-1">Amazon/equipment sales</p>
                    <p className="text-xs text-blue-600 mt-3">
                      Solar panels, composting toilets, water systems
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="font-semibold text-purple-800 mb-2">Lead Generation</h4>
                    <p className="text-3xl font-bold text-purple-600">$25 - $100</p>
                    <p className="text-sm text-purple-700 mt-1">Per qualified lead</p>
                    <p className="text-xs text-purple-600 mt-3">
                      Builders pay for pre-qualified buyer leads
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">12-Month Revenue Projection</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Month</TableHead>
                        <TableHead>Traffic</TableHead>
                        <TableHead>Applications</TableHead>
                        <TableHead>Approved Loans</TableHead>
                        <TableHead>Est. Revenue</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { month: 'Month 1', traffic: '5,000', apps: '15', approved: '3', revenue: '$450' },
                        { month: 'Month 3', traffic: '12,000', apps: '45', approved: '9', revenue: '$1,350' },
                        { month: 'Month 6', traffic: '25,000', apps: '95', approved: '19', revenue: '$2,850' },
                        { month: 'Month 9', traffic: '45,000', apps: '170', approved: '34', revenue: '$5,100' },
                        { month: 'Month 12', traffic: '75,000', apps: '285', approved: '57', revenue: '$8,550' },
                      ].map((row, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{row.month}</TableCell>
                          <TableCell>{row.traffic}</TableCell>
                          <TableCell>{row.apps}</TableCell>
                          <TableCell>{row.approved}</TableCell>
                          <TableCell className="text-emerald-600 font-medium">{row.revenue}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-slate-50 font-semibold">
                        <TableCell>Year 1 Total</TableCell>
                        <TableCell>162,000</TableCell>
                        <TableCell>610</TableCell>
                        <TableCell>122</TableCell>
                        <TableCell className="text-emerald-600">$18,300</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Break-Even Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Monthly Fixed Costs</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Website Hosting</span>
                        <span>$50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Domain & SSL</span>
                        <span>$20</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email/Communication</span>
                        <span>$30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Analytics Tools</span>
                        <span>$50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Legal/Compliance</span>
                        <span>$200</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Total Monthly Fixed</span>
                        <span>$350</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-6">
                    <h4 className="font-semibold text-emerald-800 mb-4">Break-Even Point</h4>
                    <p className="text-4xl font-bold text-emerald-600 mb-2">~8 loans/month</p>
                    <p className="text-sm text-emerald-700">
                      At an average commission of $150 per approved loan, 
                      you need approximately 8 approved loans monthly to cover fixed costs.
                    </p>
                    <div className="mt-4 pt-4 border-t border-emerald-200">
                      <p className="text-sm text-emerald-800">
                        <strong>Current trajectory:</strong> Break-even by Month 4
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Costs Tab */}
        {activeTab === 'costs' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Startup Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="text-right">Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Domain Registration</TableCell>
                      <TableCell>.com domain (1 year)</TableCell>
                      <TableCell className="text-right">$15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Web Hosting</TableCell>
                      <TableCell>VPS/Cloud hosting setup</TableCell>
                      <TableCell className="text-right">$200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">SSL Certificate</TableCell>
                      <TableCell>EV SSL for secure applications</TableCell>
                      <TableCell className="text-right">$80</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Website Development</TableCell>
                      <TableCell>Design, coding, content</TableCell>
                      <TableCell className="text-right">$2,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Legal Setup</TableCell>
                      <TableCell>Incorporation, contracts, policies</TableCell>
                      <TableCell className="text-right">$1,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Marketing Setup</TableCell>
                      <TableCell>SEO tools, analytics, ads</TableCell>
                      <TableCell className="text-right">$500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Affiliate Setup</TableCell>
                      <TableCell>Program registrations, tracking</TableCell>
                      <TableCell className="text-right">$200</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-50 font-semibold">
                      <TableCell>Total Startup</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="text-right">$4,995</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Operating Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="text-right">Monthly</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Web Hosting</TableCell>
                      <TableCell>Server, CDN, bandwidth</TableCell>
                      <TableCell className="text-right">$50</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Domain & SSL</TableCell>
                      <TableCell>Renewals</TableCell>
                      <TableCell className="text-right">$20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Email/Communication</TableCell>
                      <TableCell>Professional email, CRM</TableCell>
                      <TableCell className="text-right">$30</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Analytics & Tools</TableCell>
                      <TableCell>SEO, heatmaps, A/B testing</TableCell>
                      <TableCell className="text-right">$50</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Content Creation</TableCell>
                      <TableCell>Blog posts, images, updates</TableCell>
                      <TableCell className="text-right">$200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Legal/Compliance</TableCell>
                      <TableCell>Privacy updates, terms, audits</TableCell>
                      <TableCell className="text-right">$200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Advertising</TableCell>
                      <TableCell>Google Ads, social media</TableCell>
                      <TableCell className="text-right">$500</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-50 font-semibold">
                      <TableCell>Total Monthly</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="text-right">$1,050</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Optimization Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Increase Conversion Rate</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5" />
                        <span>Add video testimonials from successful buyers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5" />
                        <span>Implement live chat for instant support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5" />
                        <span>Create comparison tools for lenders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5" />
                        <span>Offer free downloadable guides (lead magnets)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Increase Average Commission</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5" />
                        <span>Focus on higher-value premium home referrals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5" />
                        <span>Bundle solar/off-grid equipment referrals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5" />
                        <span>Negotiate higher rates with top lenders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5" />
                        <span>Add premium placement fees for builders</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

export default AdminDashboard
