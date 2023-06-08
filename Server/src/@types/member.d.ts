export interface IMember {
    // 회원 가입시 이름, 주소, 번호, 패스워드 입력
    _id?: number;
    name?: string;
    phone?: string;
    address?: string;
    password?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
