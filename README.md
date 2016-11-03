# Aurelia Nested Routes Issue

To reproduce:
 1. `au run --watch`
 2. Browse to [http://localhost:9000/#/](http://localhost:9000/#/)
 3. Click through *Primary 2*, then *Secondary 2*, then hover over and click any of the item links (*Item 1*, etc.).
   - Notice that hovering over each item's link properly shows [http://localhost:9000/#/primary2/secondary2/item/1](http://localhost:9000/#/primary2/secondary2/item/1) etc.
   - Notice that each item's link properly opens the item's details page.
 4. Browse to [http://localhost:9000/#/primary2/secondary2/item/1](http://localhost:9000/#/primary2/secondary2/item/1)
   - Notice that the item's details page properly opens.
   - **However**, notice that hovering over the items' links **incorrectly** shows [http://localhost:9000/#/item/1](http://localhost:9000/#/item/1) etc.
   - Also, notice that the items' links do not open the corresponding item's details page.
   - Further, notice that any new items created via the *Add Item* button *do* have the correct link and *do* open correctly.
