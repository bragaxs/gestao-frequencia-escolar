export interface Student {
    id: string;
    name: string;
    email: string;
    dateOfBirth: string;
    classId: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateStudentRequest {
    name: string;
    email: string;
    dateOfBirth: string;
    classId: string;
}

export interface UpdateStudentRequest {
    name?: string;                                           //"?" indica que a alteração é opcional
    email?: string;
    dateOfBirth?: string;
    classId?: string;
}

