export const ROLES = {
    FACULTY: 'faculty',
    PARTNER: 'partner',
    ADMIN: 'admin'
  };
  
export const PERMISSIONS = {
    CREATE_PROJECT_REQUEST: 'create:project_request',
    EXPRESS_INTEREST_IN_PROJECT: 'express_interest_in_project',
    UPLOAD_COURSE: 'upload_course',
    EXPRESS_INTEREST_IN_COURSE: 'express_interest_in_course'
};

export const rolePermissions = {
    [ROLES.FACULTY]: [
        PERMISSIONS.EXPRESS_INTEREST_IN_PROJECT,
        PERMISSIONS.UPLOAD_COURSE,
        PERMISSIONS.EXPRESS_INTEREST_IN_COURSE
    ],
    [ROLES.PARTNER]: [
        PERMISSIONS.CREATE_PROJECT_REQUEST,
        PERMISSIONS.EXPRESS_INTEREST_IN_COURSE
    ]
};
  