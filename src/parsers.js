import yaml from 'js-yaml';

const parsers = {

        json: JSON.parse,
        yaml: yaml.load,
        yml: yaml.load,

};

export default (data, format) => parsers[format](data);

// if(format === "json") {
//    return JSON.parse(data)
// } else if(format === "yml") {
//     return yaml.load(data)
// } else  if (format === "yaml") {
//     return yaml.load(data)
// }
