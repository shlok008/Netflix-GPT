import OpenAI from "openai";
import { OpenAIKey } from "./constants";

const openAI = new OpenAI({
	apiKey: OpenAIKey,
    dangerouslyAllowBrowser:true,

});

export default openAI;

 