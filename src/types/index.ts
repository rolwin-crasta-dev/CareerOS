export type Status = 'Saved' | 'Applied' | 'Assessment' | 'Interview' | 'Offer' | 'Rejected'
export type Application = {
  id: string; company: string; role: string; location: string; type: string; status: Status;
  appliedAt: string; deadline: string; interviewDate: string; salary: string; url: string; notes: string; createdAt: string
}
export type Activity = { id: string; text: string; date: string; tone: string }
