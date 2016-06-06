import {check} from 'meteor/check';

export default function ({Meteor, Collections, ProductSchem}) {

  Meteor.methods({
    'insertProduct'(category_id, name, description, price) {

            const createdAt = new Date();

            /* for method stubbing only */
            //name +="-c";

            check(category_id, String);
            check(name, String);
            check(description, String);
            check(price, String);
            check(createdAt, Date);

            let formData = {
              createdBy: Meteor.userId(),
              category_id: category_id,
              name:name,
              description:description,
              price:Number(price),
              updatedAt: new Date(),
              createdAt: createdAt,
              deleted: false,
            };

            let Checker =  ProductSchem.namedContext("myContext");
            const validate = Checker.validate(formData);

            if(validate) {

              return Collections.Products.insert(formData);

            }

            let prodError = Checker.invalidKeys();

            _.map(prodError, function (o) { //map errors on each fields
              throw new Meteor.Error(Checker.keyErrorMessage(o.name));
            });
    },
  });
}
