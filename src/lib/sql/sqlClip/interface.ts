import {
  AggregateCommandLike,
  AggregateMixParamType,
} from '../../aggregateCommand/interface';
import { CommandLike, CommandMixParamType } from '../../command/interface';
import {
  SQLFields,
  SQLFilter,
  SQLGroupBy,
  SQLHaving,
  SQLJson,
  SQLLike,
  SQLName,
  SQLNewFields,
  SQLOrderBy,
  SQLRecord,
  SQLRegex,
  SQLWhere,
} from '../sqlGenerator/interface';

/**
 * @description sql 片段
 */
export interface SqlClip {
  /**
   * @description 聚合值片段
   * @param value
   */
  aggrValueClip(value: AggregateMixParamType<object>): string | SQLJson | null;
  /**
   * @description 聚合json操作片段
   * @param aggregate 聚合操作
   */
  aggrJsonClip(aggregate: AggregateCommandLike): string;
  /**
   * @description 聚合操作控制
   * @param aggregate 聚合操作
   */
  aggrControllerClip(aggregate: AggregateCommandLike): string;
  /**
   * @description 命令值片段
   * @param key
   * @param value
   */
  cmdValueClip(key: string, value: CommandMixParamType): string | null;
  /**
   * @description 比较操作符片段
   * @param key 字段
   * @param command
   */
  cmdCompareClip(key: string, command: CommandLike): string;
  /**
   * @description 逻辑操作符片段
   * @param command
   */
  cmdLogicClip(key: string, command: CommandLike): string;
  /**
   * @description 命令操作控制
   * @param command 命令
   */
  cmdControllerClip(key: string, command: CommandLike): string;
  /**
   * @description 集合名
   * @param name
   */
  nameClip(name: SQLName): string;
  /**
   * @description 字段片段
   * @param fields
   * @param newfields
   * @param group
   */
  fieldsClip(
    fields?: SQLFields,
    newfields?: SQLNewFields,
    group?: SQLGroupBy
  ): string;
  /**
   * @description 新增 fields 片段
   * @param newfields
   */
  newfieldsClip(newfields?: SQLNewFields): string;
  /**
   * @description 过滤列名
   * @param filter
   */
  fieldFilterClip(filter?: SQLFilter): string;
  /**
   * @description 模糊片段
   * @param key
   * @param value
   */
  likeClip(key: string, value: SQLLike): string;
  /**
   * @description 正则片段
   * @param key
   * @param value
   */
  regexClip(key: string, value: SQLRegex | RegExp): string;
  /**
   * @description 字段键片段
   * @param key
   */
  keyClip(key: string): string;
  /**
   * @description 筛选片段
   * @param where
   */
  whereClip(where?: SQLWhere): string;
  /**
   * @description 分组片段
   * @param groupBy
   */
  groupByClip(groupBy?: SQLGroupBy): string;
  /**
   * @description 分组筛选
   * @param having
   */
  havingClip(having?: SQLHaving): string;
  /**
   * @description 排序片段
   * @param orderby
   */
  orderByClip(orderby?: SQLOrderBy): string;
  /**
   * @description 记录片段
   * @param record
   */
  recordClip(record?: SQLRecord): string;
  /**
   * @description  分页片段
   * @param limit
   * @param skip
   */
  limitClip(limit: number, skip?: number): string;
}
