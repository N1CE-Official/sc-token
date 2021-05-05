const N1CEToken = artifacts.require("./N1CEToken.sol");

require('chai')
	.should();

contract('N1CEToken', accounts => {
	const _name = 'N1CEToken';
	const _symbol = 'N1CE';
	const _decimals = 18;

	beforeEach(async function(){
		this.token = await N1CEToken.new()
	});

	describe('token attributes', function(){
		it('has the correct name', async function(){
			const name = await this.token.name();
			name.should.equal(_name);
		});

		it('has the correct symbol', async function(){
			const symbol = await this.token.symbol();
			symbol.should.equal(_symbol);
		});
	});
});