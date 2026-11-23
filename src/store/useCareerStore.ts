import { create } from 'zustand'
import type { Application, Status } from '../types'

type CareerStore = {
  applications: Application[]
  addApplication: (application: Omit<Application, 'id' | 'createdAt'>) => void
  updateApplication: (id: string, changes: Partial<Application>) => void
  deleteApplication: (id: string) => void
  moveApplication: (id: string, status: Status) => void
  importApplications: (items: Application[]) => void
}
const seed: Application[] = [
  { id: 'a1', company: 'Atlassian', role: 'Frontend Developer Intern', location: 'Bengaluru, India', type: 'Internship', status: 'Interview', appliedAt: '2026-11-12', deadline: '', interviewDate: '2026-11-26', salary: '₹35,000 / month', url: 'https://atlassian.com', notes: 'Prepare React, JavaScript fundamentals and a project walkthrough.', createdAt: '2026-11-12' },
  { id: 'a2', company: 'Razorpay', role: 'Software Engineer Intern', location: 'Remote', type: 'Internship', status: 'Applied', appliedAt: '2026-11-18', deadline: '2026-11-30', interviewDate: '', salary: '₹40,000 / month', url: '', notes: 'Review DSA and API design basics.', createdAt: '2026-11-18' },
  { id: 'a3', company: 'Zoho', role: 'Graduate Trainee', location: 'Chennai, India', type: 'Full-time', status: 'Assessment', appliedAt: '2026-11-09', deadline: '', interviewDate: '', salary: 'Not disclosed', url: '', notes: 'Online assessment pending.', createdAt: '2026-11-09' },
  { id: 'a4', company: 'Postman', role: 'Frontend Intern', location: 'Bengaluru, India', type: 'Internship', status: 'Saved', appliedAt: '', deadline: '2026-12-04', interviewDate: '', salary: '₹30,000 / month', url: '', notes: 'Tailor resume around React projects.', createdAt: '2026-11-20' },
  { id: 'a5', company: 'Freshworks', role: 'Associate Software Engineer', location: 'Chennai, India', type: 'Full-time', status: 'Rejected', appliedAt: '2026-10-28', deadline: '', interviewDate: '', salary: '', url: '', notes: 'Revisit role requirements before applying again.', createdAt: '2026-10-28' },
  { id: 'a6', company: 'CRED', role: 'Product Engineering Intern', location: 'Bengaluru, India', type: 'Internship', status: 'Offer', appliedAt: '2026-10-21', deadline: '', interviewDate: '', salary: '₹45,000 / month', url: '', notes: 'Example data — replace with your real applications.', createdAt: '2026-10-21' },
]
const load = (): Application[] => { try { const raw = localStorage.getItem('careeros-applications'); return raw ? JSON.parse(raw) as Application[] : seed } catch { return seed } }
const save = (items: Application[]) => { localStorage.setItem('careeros-applications', JSON.stringify(items)) }
export const useCareerStore = create<CareerStore>((set, get) => ({
  applications: load(),
  addApplication: (item) => { const next = [...get().applications, { ...item, id: crypto.randomUUID(), createdAt: new Date().toISOString().slice(0, 10) }]; save(next); set({ applications: next }) },
  updateApplication: (id, changes) => { const next = get().applications.map(a => a.id === id ? { ...a, ...changes } : a); save(next); set({ applications: next }) },
  deleteApplication: (id) => { const next = get().applications.filter(a => a.id !== id); save(next); set({ applications: next }) },
  moveApplication: (id, status) => { const next = get().applications.map(a => a.id === id ? { ...a, status } : a); save(next); set({ applications: next }) },
  importApplications: (items) => { save(items); set({ applications: items }) },
}))
