import { Tab } from "@headlessui/react";
import React, { useState } from "react";

export default function PageComponent() {
  return (
    <div>
      <HeaderComponent />
    </div>
  );
}

export function HeaderComponent() {
  return (
    <div>
      <p className=" mobile:text-yellow-400 mobile:text-3xl mobile:text-center mobile:font-bold mt-6">
        All About Food
      </p>
      <p className=" px-3 py-2 text-center mobile:text-justify">
        Here we will show food from various parts of the world, this is very
        interesting.
      </p>
      <div>
        <TabComponent />
      </div>
    </div>
  );
}

export function TabComponent() {
  let [foods] = useState({
    Indonesia: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Seblak",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Belem Hayam",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Seblak Makroni",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Seblak Makroni",
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Seblak Makroni",
      },
      {
        id: 6,
        url: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Seblak Makroni",
      },
    ],
    Italy: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1597131628347-c769fc631754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Spageti",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Pizza",
      },
      {
        id: 3,
        url: "https://media.istockphoto.com/photos/bolognese-pens-picture-id155433174?b=1&k=20&m=155433174&s=170667a&w=0&h=rOapVgjHT7dJnndVOPM5s4GbIWMChi-_iriPADwod5w=",
        name: "Makroni",
      },
      {
        id: 4,
        url: "https://media.istockphoto.com/photos/spaghetti-with-fresh-tomato-sauce-mozzarella-and-basil-picture-id925256408?b=1&k=20&m=925256408&s=170667a&w=0&h=9w0Ot-DxyzvS_6ogjTHMQKDWLiH0t1Via8IXBxoGGno=",
        name: "Spageti",
      },
      {
        id: 5,
        url: "https://media.istockphoto.com/photos/homemade-italian-bruschetta-on-rustic-wooden-table-picture-id1181611076?b=1&k=20&m=1181611076&s=170667a&w=0&h=_UR2cuy4gzTBZcPazSlacMVwjcV6_PCLHQMAPkHVOgc=",
        name: "Spageti",
      },
      {
        id: 6,
        url: "https://media.istockphoto.com/photos/full-table-of-italian-meals-on-plates-pizza-pasta-ravioli-carpaccio-picture-id1227415751?b=1&k=20&m=1227415751&s=170667a&w=0&h=7BO67R9KTuIzLmUEKY-qXx0PS9jxs3CsFK1rQy6iqbw=",
        name: "Spageti",
      },
    ],
    Korean: [
      {
        id: 1,
        url: "https://media.istockphoto.com/photos/chopped-pork-meat-cooked-with-red-chili-paste-gochujang-sauce-over-picture-id690784532?b=1&k=20&m=690784532&s=170667a&w=0&h=z0BgrEktrMGugPSujGpaP64Qx-T_3_x7SmE8i-txVUU=",
        name: "Sangu",
      },
      {
        id: 2,
        url: "https://media.istockphoto.com/photos/kimchi-soup-served-in-hot-pot-traditional-korean-food-picture-id1212128248?b=1&k=20&m=1212128248&s=170667a&w=0&h=UB2DYbM_qLTpvNlL4DiyBCXCUygCqhOPsUsuD_uFZhs=",
        name: "Sop",
      },
      {
        id: 3,
        url: "https://media.istockphoto.com/photos/fried-dumplings-gyoza-on-a-plate-on-a-gray-concrete-background-picture-id1268020995?b=1&k=20&m=1268020995&s=170667a&w=0&h=7Ui7Vh5lk0LeI2bS-gqGxO-_xUo5IxAYUX-uCDp3YRs=",
        name: "Pempe",
      },
      {
        id: 4,
        url: "https://media.istockphoto.com/photos/bi-bim-bap-picture-id1337580852?b=1&k=20&m=1337580852&s=170667a&w=0&h=tLjNvS7QoWiZMKfBGX7LIhoRVtRVrRICK5WR1n37nBE=",
        name: "Telor dadar",
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a29yZWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Naon",
      },
      {
        id: 6,
        url: "https://media.istockphoto.com/photos/spicy-korean-beef-noodles-picture-id1315881909?b=1&k=20&m=1315881909&s=170667a&w=0&h=Ijh1cAb8pOfD0Ya-KKh65OQKobmAmzuSesN4vXUjDnw=",
        name: "Ramen",
      },
    ],
  });
  return (
    <div className=" px-3">
      <Tab.Group>
        <Tab.List className="flex flex-row bg-rose-400 rounded tablet:bg-red-800 mobile:bg-yellow-400 mobile:space-x-3 mobile:justify-between p-1">
          <Tab className=" rounded-md mobile:hover:bg-fuchsia-100 mobile:px-4 mobile:py-2">
            Indonesia
          </Tab>
          <Tab className="rounded-md w-32 mobile:hover:bg-fuchsia-100 mobile:px-4 mobile:py-2">
            Italy
          </Tab>
          <Tab className="rounded-md mobile:hover:bg-fuchsia-100 mobile:px-4 mobile:py-2">
            Korean
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <div className="grid mobile:grid-cols-1">
              {foods.Indonesia.map((items) => {
                return (
                  <div key={items.id} className="py-2">
                    <img src={items.url} />
                  </div>
                );
              })}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid mobile:grid-cols-1">
              {foods.Italy.map((items) => {
                return (
                  <div key={items.id} className="py-2">
                    <img src={items.url} />
                  </div>
                );
              })}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid mobile:grid-cols-1">
              {foods.Korean.map((items) => {
                return (
                  <div key={items.id} className="py-2">
                    <img src={items.url} />
                  </div>
                );
              })}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
