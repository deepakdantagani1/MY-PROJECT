

/**
 * enums
 */

enum Status {
  active = 'Active',
  inactive = 'Inactive'
}

interface Appointment {
  status: Status;
  date: Date
}

const appointment: Appointment = {
  status: Status.active,
  date: new Date()
}
