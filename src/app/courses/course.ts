export class Course {
    id: number | undefined;
    name: string = "";
    imageUrl: string | undefined;
    price: number | undefined;
    code: string = "";
    duration: number | undefined;
    rating: number = 0;
    releaseDate: string | undefined;
    description?: string;
}