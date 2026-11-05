import { TestBed } from '@angular/core/testing';
import { OfflineStorageService, OfflinePreparacion } from './offline-storage.service';

describe('OfflineStorageService', () => {
  let service: OfflineStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save and retrieve a preparacion correctly', async () => {
    const mockPreparacion: OfflinePreparacion = {
      sucursal: {
        id: 1,
        nombre: 'Sucursal 1',
        ciudad: 'La Paz',
        es_activa: true,
      },
      productos: [
        {
          id: 1,
          nombre: 'Producto Test',
          categoria_id: 1,
          es_activo: true,
          variantes: [
            {
              id: 1,
              producto_id: 1,
              talla_id: 1,
              talla_nombre: 'M',
              color_id: 1,
              color_nombre: 'Rojo',
              precio: 100,
              stock_disponible: 5,
            },
          ],
        },
      ],
      tallas: [
        {
          id: 1,
          nombre: 'M',
        },
      ],
      colores: [
        {
          id: 1,
          nombre: 'Rojo',
        },
      ],
      clientes_minimos: [],
      metadata: {
        fecha_preparacion: new Date().toISOString(),
        version: 1,
        estado: 'completado',
        empresa_id: 1,
        sucursal_id: 1,
      },
    };

    const empresaId = 1;
    const sucursalId = 1;

    // Step 1: Save preparacion
    await service.savePreparacion(mockPreparacion, empresaId);
    console.log('✓ savePreparacion completed');

    // Step 2: Retrieve preparacion
    const retrieved = await service.getPreparacion(empresaId, sucursalId);
    console.log('✓ getPreparacion completed');

    // Step 3: Verify data
    expect(retrieved).toBeTruthy();
    expect(retrieved?.metadata.empresa_id).toBe(empresaId);
    expect(retrieved?.metadata.sucursal_id).toBe(sucursalId);
    expect(retrieved?.productos.length).toBe(1);
    expect(retrieved?.productos[0].nombre).toBe('Producto Test');
    console.log('✓ Data verification passed');
  });

  it('should return null for non-existent preparacion', async () => {
    const retrieved = await service.getPreparacion(999, 999);
    expect(retrieved).toBeNull();
    console.log('✓ Non-existent preparacion returns null');
  });

  it('should retrieve all preparaciones for an empresa', async () => {
    const empresaId = 2;
    const prep1: OfflinePreparacion = {
      sucursal: { id: 1, nombre: 'S1', ciudad: 'LP', es_activa: true },
      productos: [],
      tallas: [],
      colores: [],
      clientes_minimos: [],
      metadata: {
        fecha_preparacion: new Date().toISOString(),
        version: 1,
        estado: 'completado',
        empresa_id: empresaId,
        sucursal_id: 1,
      },
    };

    const prep2: OfflinePreparacion = {
      sucursal: { id: 2, nombre: 'S2', ciudad: 'SC', es_activa: true },
      productos: [],
      tallas: [],
      colores: [],
      clientes_minimos: [],
      metadata: {
        fecha_preparacion: new Date().toISOString(),
        version: 1,
        estado: 'completado',
        empresa_id: empresaId,
        sucursal_id: 2,
      },
    };

    // Save two preparaciones
    await service.savePreparacion(prep1, empresaId);
    await service.savePreparacion(prep2, empresaId);
    console.log('✓ Saved 2 preparaciones');

    // Retrieve all
    const all = await service.getAllPreparaciones(empresaId);
    console.log('✓ getAllPreparaciones completed');

    expect(all.length).toBeGreaterThanOrEqual(2);
    console.log('✓ Retrieved at least 2 preparaciones');
  });

  it('should delete a preparacion', async () => {
    const mockPreparacion: OfflinePreparacion = {
      sucursal: { id: 10, nombre: 'S10', ciudad: 'Test', es_activa: true },
      productos: [],
      tallas: [],
      colores: [],
      clientes_minimos: [],
      metadata: {
        fecha_preparacion: new Date().toISOString(),
        version: 1,
        estado: 'completado',
        empresa_id: 10,
        sucursal_id: 10,
      },
    };

    const empresaId = 10;
    const sucursalId = 10;

    // Save
    await service.savePreparacion(mockPreparacion, empresaId);
    console.log('✓ Saved preparacion for deletion');

    // Verify it exists
    const beforeDelete = await service.getPreparacion(empresaId, sucursalId);
    expect(beforeDelete).toBeTruthy();
    console.log('✓ Confirmed preparacion exists');

    // Delete
    await service.deletePreparacion(empresaId, sucursalId);
    console.log('✓ deletePreparacion completed');

    // Verify it's gone
    const afterDelete = await service.getPreparacion(empresaId, sucursalId);
    expect(afterDelete).toBeNull();
    console.log('✓ Confirmed preparacion was deleted');
  });
});
