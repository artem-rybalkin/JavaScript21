function pow(base, exponent) {
	 	result = base;
		for (var i = 1; i < exponent; i++) {
		 result *= base;
		}

		return result;
}

module.exports = pow ;
