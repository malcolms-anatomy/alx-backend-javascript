import getListStudents from '../0-get_list_students.js';
import getStudentsByLocation from '../2-get_students_by_loc.js';

describe('getStudentsByLocation', () => {
  it('should return an array of students located in the specified city', () => {
    const students = getListStudents();
    const result = getStudentsByLocation(students, 'San Francisco');
    expect(result).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);
  });

  it('should return an empty array if no students are located in the specified city', () => {
    const students = getListStudents();
    const result = getStudentsByLocation(students, 'New York');
    expect(result).toEqual([]);
  });
});
