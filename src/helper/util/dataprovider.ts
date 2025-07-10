import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

export interface RegisterUser {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    confirmPassword: string;
    gender?: string;
}

export class DataProvider {
    static getRegisterUsersFromCSV(): RegisterUser[] {
        const filePath = path.resolve(__dirname, './test-data/registerUser.csv');
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        const records: RegisterUser[] = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            trim: true
        });

        return records;
    }
}
