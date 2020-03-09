import unirest from "unirest";
const apiUrl =
  "https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/";
const condition = "Condition?patient=";
const patient = "Patient/";

export function getConditions(id) {
  return unirest
    .get(apiUrl + condition + id)
    .headers("Accept", "application/json+fhir")
    .then(response => {
      if (response.body.entry) {
        let result = response.body.entry;
        return result
          .filter(elem => elem.resource.clinicalStatus === "active")
          .map(elem => {
            return {
              condition: elem.resource.code.text,
              date: elem.resource.dateRecorded
            };
          });
      }
      return [{condition: "No conditions associated with this ID.", date: ""}]
    })
}

export function getPatient(id) {
  return unirest
    .get(apiUrl + patient + id)
    .headers("Accept", "application/json+fhir")
    .then(response => {
      let { gender, birthDate } = response.body;
      return {
        name: response.body.name[0].text,
        dob: birthDate,
        gender: gender
      };
    })
    .catch(
      err => {
          return ({name: "Patient not found", dob: "", gender: ""})
      }
    );
}
