QUnit.module("masod", function () {
    QUnit.test("Létezik-E?", (assert) => {
      assert.ok(masod);
    });

    QUnit.test("Függvény-E?", (assert) => {
        assert.ok(typeof masod === "function");
    });
    
    QUnit.test("Szám: 3", (assert) => {
        assert.equal(masod(1,91,5), 1,91,5);
      });  

    
    
    /* QUnit.test("Szöveg ami nem tartalmaz számot: kutya", (assert) => {
        assert.equal(masod("kutya"), "Nem szám a bemenet");
    });

    QUnit.test("Nincs paraméter", (assert) => {
        assert.equal(masod(), "Nincs paraméter");
      });

    QUnit.test("Egynél több paraméter", (assert) => {
        assert.equal(masod(3, 5), "Egynél több paraméter");
    }); 
    
  });
    */

})