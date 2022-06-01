import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
	print(report: string): void {
		const html = `
                        <html>                
                            <h1>Analysis Output</h1>
                            <h3>${report}</h3>    
                        </html>    
                    `;
		fs.writeFileSync("report.html", html);
	}
}
