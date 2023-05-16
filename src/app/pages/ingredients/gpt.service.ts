import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from "../../../enviornments/enviornment.defaults";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  // private openai: OpenAIApi;
  // configuration = new Configuration({
  //   apiKey: environment.gptKey,
  // });
  // constructor() { 
  //   this.openai = new OpenAIApi(this.configuration);
  // }

  // promptPrefix: string = 'say this is a test';

  // generateText(prompt: string):Promise<string | undefined>{
  //   return this.openai.createCompletion({
  //        model: "text-davinci-003",
  //        prompt: prompt,
  //        max_tokens: 256
  //      }).then(response => {
  //        return response.data.choices[0].text;
  //      }).catch(error=>{
  //        return '';
  //      });
  //  }
  response: any;
  inputData: string = 'Say this is a test';
  private apiEndpoint = 'https://api.openai.com/v1/completions';
  constructor(private http: HttpClient){}

  submit(prompt: string): Promise<string> {
    const body = {
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.7,
      n: 1,
      stop: '\n',
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.gptKey}`,
    };

    return this.http.post(this.apiEndpoint, body, { headers })
      .toPromise()
      .then((response: any) => {
        return response.choices[0].text.trim();
      })
      .catch((error: any) => {
        console.error('Error calling chatgpt API', error);
        return '';
      });
  }

  getMockRecipe(){
    
  }
}


