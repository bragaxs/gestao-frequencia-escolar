export interface teacher{
    id: string;
    employeeId: string; // Identificação funcional do professor 
    name: string;
    email: string;
    phone: string;
    department: string;
    specialization: string[];
    hireDate: string;
    status: TeacherStatus;
    classIds: string[];
    createdAt: string;
    updatedAt: string;
    
}

export enum TeacherStatus {
    ACTIVE = 'ativo',
    INACTIVE = 'inativo',
    ON_LEAVE = 'em licença',
    RETIRED = 'aposentado'
}

export interface UpdateTeacherRequest {
    employeeId: string; 
    name: string;
    email: string;
    phone: string;
    department: string;
    specialization: string[];
    status?: TeacherStatus; // Opcional, padrão é 'ativo'
    classIds?: string[]; // Opcional, pode ser vazio inicialmente
}