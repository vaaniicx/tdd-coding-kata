describe('Coding Kata 2', function() {
    beforeEach(function() {
        electrons = new Electrons();
    });

    it('Should return 6 for given array', function() {
        expect(electrons.solve(1, 2, 3, 4, 5))
            .toEqual(6);
    });

    it('Should return 4 for given array', function() {
        expect(electrons.solve(2, 2, 3, 3))
            .toEqual(4);
    });

    it('Should return 2 for given array', function() {
        expect(electrons.solve(6, 6, 4, 4, 1, 3))
            .toEqual(2);
    });

    it('Should return 12 for given array', function() {
        expect(electrons.solve(3, 5, 3, 5, 4, 2))
            .toEqual(12);
    });
});