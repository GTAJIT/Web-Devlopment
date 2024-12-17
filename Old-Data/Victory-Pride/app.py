from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample data
products = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_product', methods=['GET', 'POST'])
def add_product():
    if request.method == 'POST':
        name = request.form['name']
        price = request.form['price']
        description = request.form['description']
        product = {'name': name, 'price': price, 'description': description}
        products.append(product)
        return redirect(url_for('product_list'))
    return render_template('add_product.html')

@app.route('/products')
def product_list():
    return render_template('product_list.html', products=products)

if __name__ == '__main__':
    app.run(debug=True)
