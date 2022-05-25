import fs from "fs";

export type RowParser<T> = (row: string[]) => T;

export class CsvFileReader<T> {
	private data: T[] | null = null;

	constructor(private filename: string, private rowParser: RowParser<T>) {}

	read(): CsvFileReader<T> {
		if (!this.data) {
			this.data = fs
				.readFileSync(this.filename, {
					encoding: "utf-8",
				})
				.split("\n")
				.map((row: string): string[] => row.split(","))
				.map(this.rowParser);
		}
		return this;
	}

	getData() {
		return this.data;
	}
}
