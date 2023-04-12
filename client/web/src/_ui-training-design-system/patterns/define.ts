import { Constructable, FASTElement, PartialFASTElementDefinition } from '@microsoft/fast-element';

export type DefineFunction<TType> = (definition: PartialFASTElementDefinition) => TType;
export type DefinitionOverrider = (
  override: PartialFASTElementDefinition
) => PartialFASTElementDefinition;

const defaultDefinitionOverrider =
  (base: PartialFASTElementDefinition): DefinitionOverrider =>
  (override: PartialFASTElementDefinition): PartialFASTElementDefinition => ({
    ...base,
    ...override,
  });

/**
 * Defines a platform custom element based on the provided type and definition.
 *
 * @example
 * An example using custom definition merge logic, useful if you need to impose hard restrictions.
 * ```ts
 * const definitionOverrider = (definition) => ({
 *    ...baseDefinition,
 *    ...definition,
 *    styles: baseDefinition.styles,
 *    shadowOptions: {
 *      mode: 'closed,
 *    },
 * });
 * export const define = defineFactory(LoginForm, definitionOverrider);
 * ```
 *
 * @example
 * You can provide the base definition if you're happy with the default spread operator merge logic.
 * ```ts
 * export const define = defineFactory(LoginForm, baseDefinition);
 * ```
 *
 * @param Type - The custom element Type / Class to define.
 * @param overriderOrBase - A function that merges definitions, or the base definition if custom merging is not needed.
 * @returns The type class.
 */
export const defineFactory =
  <TType extends Constructable<FASTElement>>(
    Type: TType,
    overriderOrBase: DefinitionOverrider | PartialFASTElementDefinition
  ): DefineFunction<TType> =>
  (definition) => {
    const overrider =
      typeof overriderOrBase === 'function'
        ? overriderOrBase
        : defaultDefinitionOverrider(overriderOrBase);
    return FASTElement.define<TType>(class extends Type {}, overrider(definition));
  };
