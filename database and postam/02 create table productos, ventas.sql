DROP TABLE IF EXISTS productos;

CREATE TABLE productos ( 
    codigo BINARY(36) NOT NULL, 
    precioUnitario DECIMAL(7, 2) NOT NULL, 
    descuento INT NOT NULL, 
    existencia INT NOT NULL, 
    
    CONSTRAINT PK_Productos PRIMARY KEY (codigo) 
);

DROP TABLE IF EXISTS ventas;

CREATE TABLE ventas ( 
    codigo BINARY(36) NOT NULL, 
    productoId BINARY(36) NOT NULL, 
    cantidad INT NOT NULL, 
    
    CONSTRAINT PK_Ventas PRIMARY KEY (codigo), 
    CONSTRAINT FK_Ventas_Producto FOREIGN KEY (productoId) REFERENCES productos (codigo) 
);
