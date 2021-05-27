import React, { useState } from 'react';

const Calculator = () => {
	const [
		result,
		setResult
	] = useState('');

	const handleClick = (e) => {
		setResult(result.concat(e.target.name));
	};

	const clear = () => {
		setResult('');
	};

	const backspace = () => {
		setResult(result.slice(0, -1));
	};

	const calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (err) {
			setResult('ERROR');
		}
	};

	if (result.length >= 11) {
		setResult(result.substr(0, 11 - 1));
	}

	return (
		<div className="calc">
			<h1 className="">CALCULATOR</h1>
			<div className="container">
				<div className="result">
					<div className="face">{result}</div>
				</div>
				<div className="keypad">
					<button className="clear highlight slide-in" onClick={clear}>
						CLEAR
					</button>
					<button className="highlight slide-in" onClick={backspace}>
						C
					</button>
					<button className="highlight slide-in" name="/" onClick={handleClick}>
						&#247;
					</button>
					<button className="slide-in" name="7" onClick={handleClick}>
						7
					</button>
					<button className="slide-in" name="8" onClick={handleClick}>
						8
					</button>
					<button className="slide-in" name="9" onClick={handleClick}>
						9
					</button>
					<button className="highlight slide-in" name="*" onClick={handleClick}>
						&#215;
					</button>

					<button className="slide-in" name="4" onClick={handleClick}>
						4
					</button>
					<button className="slide-in" name="5" onClick={handleClick}>
						5
					</button>
					<button className="slide-in" name="6" onClick={handleClick}>
						6
					</button>
					<button className="highlight slide-in" name="-" onClick={handleClick}>
						&#8722;
					</button>

					<button className="slide-in" name="1" onClick={handleClick}>
						1
					</button>
					<button className="slide-in" name="2" onClick={handleClick}>
						2
					</button>
					<button className="slide-in" name="3" onClick={handleClick}>
						3
					</button>
					<button className="highlight slide-in" name="+" onClick={handleClick}>
						&#43;
					</button>

					<button className="slide-in" name="0" onClick={handleClick}>
						0
					</button>
					<button className="slide-in" name="." onClick={handleClick}>
						.
					</button>

					<button className="equals highlight slide-in" name="clear" onClick={calculate}>
						&#61;
					</button>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
