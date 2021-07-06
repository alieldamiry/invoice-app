import classes from "./Form.module.scss";
import Input from "./Input";
import { FormGrid3, FormGrid2 } from "./FormGrid";
import Select from './Select';

const Form = () => {
  return (
    <>
      <div className={classes.FormWrapper}>
        <form action="" className={classes.Form}>
          <h2 className={classes.Title}>Create Invoice</h2>
          <div className={classes.ScrollWrapper}>
            <div className={classes.FormSection}>
              <h5 className={classes.FormSection__Title}>Bill From</h5>
              <Input
                id="streetAddressFrom"
                label="Street Address"
                type="text"
              />
              <FormGrid3>
                <Input id="cityFrom" label="City" type="text" />
                <Input id="postCodeFrom" label="Post Code" type="text" />
                <Input id="countryFrom" label="Country" type="text" />
              </FormGrid3>
            </div>
            <div className={classes.FormSection}>
              <h5 className={classes.FormSection__Title}>Bill To</h5>
              <Input id="clientNameTo" label="Client's Name" type="text" />
              <Input id="clientEmailTo" label="Client's Email" type="email" />
              <Input id="streetAdressTo" label="Street Address" type="email" />
              <FormGrid3>
                <Input id="cityTo" label="City" type="text" />
                <Input id="postCodeTo" label="Post Code" type="text" />
                <Input id="countryTo" label="Country" type="text" />
              </FormGrid3>
              <FormGrid2>
                <Input id="InvoiceDate" label="Invoice Date" type="date" />
                <Select id="paymentTerms" label="Payment Terms">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </Select>
              </FormGrid2>
                <Input id="Description" label="Description" placeholder="e.g. Graphic Design Service" type="text" />
            </div>
          </div>
        
        </form>
      </div>
      <div className={classes.Backdrop}></div>
    </>
  );
};

export default Form;
